import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = ["Facilities", "Production", "Services", "Post", "Gallery"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0b0b0a]/80 border-b border-[#ebe4d4]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 border border-[#c8a86a]/60 grid place-items-center">
            <span className="font-[Cormorant_Garamond] italic font-bold text-xl text-[#ebe4d4] leading-none">
              NV
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[Cormorant_Garamond] italic text-lg text-[#ebe4d4]">
              NV Films
            </span>
            <span className="font-light tracking-[0.3em] text-[9px] text-[#c8a86a]/80 uppercase">
              Global · Cape Town
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.2em] uppercase text-[#ebe4d4]/70 font-light">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#ebe4d4] transition relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#c8a86a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden md:inline-flex text-[11px] tracking-[0.25em] uppercase text-[#ebe4d4]/60 hover:text-[#ebe4d4] transition"
          >
            EN / FR
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-[#c8a86a]/60 hover:border-[#c8a86a] px-5 py-2.5 text-[11px] font-light tracking-[0.3em] uppercase text-[#ebe4d4] hover:bg-[#c8a86a]/10 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.header>
  );
}
