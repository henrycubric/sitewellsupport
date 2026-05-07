"use client";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/7 bg-black/85 backdrop-blur-xl">
      <a href="#" className="font-extrabold text-xl tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
        well<span className="text-[#7CFF6B]">.info</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["Process", "Services", "Pricing"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-[#888880] text-sm hover:text-white transition-colors">
              {item}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="bg-[#7CFF6B] text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-[#B8FF4F] transition-colors">
            Get a Site →
          </a>
        </li>
      </ul>
    </nav>
  );
}
