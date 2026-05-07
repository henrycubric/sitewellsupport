export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-white/7 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-extrabold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
        well<span className="text-[#7CFF6B]">.info</span>
      </span>
      <ul className="flex flex-wrap gap-6 list-none">
        {["Process", "Services", "Pricing", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-[#888880] text-sm hover:text-white transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <span className="text-[#888880] text-xs">© 2026 well.info — Vancouver, BC</span>
    </footer>
  );
}
