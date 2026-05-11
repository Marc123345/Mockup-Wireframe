import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl bg-[#0a0a0a]/85 border-b border-[#f0ece4]/5 md:bg-transparent md:backdrop-blur-none md:border-transparent ${
        scrolled
          ? "md:backdrop-blur-xl md:bg-[#0a0a0a]/80 md:border-[#f0ece4]/5"
          : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link to="/" className="flex items-center group">
          <img
            src="https://images.squarespace-cdn.com/content/v1/646d21517c13626b8c0e538c/cfea1f15-0686-45c1-bf85-b851f2b14bba/NV+LOGO.png?format=300w"
            alt="NV Films"
            className="h-9 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.2em] uppercase text-[#f0ece4]/70 font-light">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#f0ece4] transition relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#b89a6a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <Link
          to="/proposal"
          className="inline-flex items-center gap-3 border border-[#b89a6a]/60 hover:border-[#b89a6a] px-5 py-2.5 text-[11px] font-light tracking-[0.3em] uppercase text-[#f0ece4] hover:bg-[#b89a6a]/10 transition"
        >
          View Proposal
          <span className="text-xs">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}
