require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['POST', 'GET'],
}));

// Rate limit: max 5 form submissions per 15 min per IP
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again later.' },
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Load or init leads store
function loadLeads() {
  if (!fs.existsSync(LEADS_FILE)) return [];
  return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
}

function saveLead(lead) {
  const leads = loadLeads();
  leads.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// Validate required fields
function validate(body) {
  const { name, email, message } = body;
  if (!name || name.trim().length < 2) return 'Name is required.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Valid email is required.';
  if (!message || message.trim().length < 10) return 'Please include a message (min 10 characters).';
  return null;
}

// POST /api/contact — handle contact form submissions
app.post('/api/contact', formLimiter, async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const error = validate(req.body);
  if (error) return res.status(400).json({ error });

  const lead = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || '',
    service: service?.trim() || 'Not specified',
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    ip: req.ip,
  };

  // Save lead locally
  try { saveLead(lead); } catch (e) { console.error('Lead save error:', e); }

  // Send notification to sitewell team
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      await transporter.sendMail({
        from: `"SiteWell.info" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL || 'support@sitewell.info',
        subject: `New Lead: ${lead.name} — ${lead.service}`,
        html: `
          <h2>New Website Inquiry</h2>
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
            <tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${lead.name}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px">${lead.email}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px">${lead.phone || '—'}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Service</td><td style="padding:6px 12px">${lead.service}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">Message</td><td style="padding:6px 12px">${lead.message.replace(/\n/g, '<br>')}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Submitted</td><td style="padding:6px 12px">${new Date(lead.submittedAt).toLocaleString('en-CA')}</td></tr>
          </table>
        `,
      });

      // Auto-reply to the customer
      await transporter.sendMail({
        from: `"SiteWell.info" <${process.env.SMTP_USER}>`,
        to: lead.email,
        subject: 'Thanks for reaching out — SiteWell.info',
        html: `
          <div style="font-family:sans-serif;max-width:500px">
            <h2 style="color:#111">Hey ${lead.name}, we got your message!</h2>
            <p>Thanks for reaching out to <strong>SiteWell.info</strong>. We'll review your inquiry and get back to you within <strong>24 hours</strong>.</p>
            <p style="color:#666">Here's what you sent us:</p>
            <blockquote style="border-left:3px solid #7CFF6B;padding:8px 16px;color:#444">${lead.message.replace(/\n/g, '<br>')}</blockquote>
            <p>Talk soon,<br><strong>The SiteWell Team</strong></p>
            <p style="font-size:12px;color:#999">Vancouver, BC · sitewell.info · support@sitewell.info</p>
          </div>
        `,
      });
    } catch (e) {
      console.error('Email error:', e.message);
    }
  }

  res.json({ success: true, message: "Thanks! We'll be in touch within 24 hours." });
});

// GET /api/leads — view all leads (protect this in production!)
app.get('/api/leads', (req, res) => {
  const secret = req.query.secret;
  if (!process.env.LEADS_SECRET || secret !== process.env.LEADS_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(loadLeads());
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.listen(PORT, () => console.log(`SiteWell API running on port ${PORT}`));
