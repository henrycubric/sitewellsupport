export default function Footer() {
  return (
    <footer
      className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ background: "#eff4ff", borderColor: "rgba(0,70,85,0.10)" }}
    >
      <span className="font-bold text-lg" style={{ fontFamily: "var(--font-epilogue)", color: "#004655" }}>
        SiteWell<span style={{ color: "#005F73" }}>.info</span>
      </span>
      <ul className="flex flex-wrap gap-6 list-none">
        {["Process", "Services", "Pricing", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-opacity hover:opacity-100"
              style={{ color: "#6f797c" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <span className="text-xs" style={{ color: "#6f797c" }}>© 2026 SiteWell.info — Vancouver, BC</span>
    </footer>
  );
}
