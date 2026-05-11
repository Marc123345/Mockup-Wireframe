export default function Footer() {
  return (
    <footer className="relative border-t border-[#f0ece4]/10 pt-20 pb-10 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-[#f0ece4]/5">
          <div className="md:col-span-4">
            <div className="mb-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/646d21517c13626b8c0e538c/cfea1f15-0686-45c1-bf85-b851f2b14bba/NV+LOGO.png?format=300w"
                alt="NV Films"
                className="h-10 w-auto object-contain mb-1"
                style={{ filter: 'brightness(0) invert(1) opacity(0.85)' }}
              />
              <div className="font-light tracking-[0.3em] text-[9px] text-[#b89a6a]/80 uppercase mt-2">
                Global · Cape Town
              </div>
            </div>
            <p className="font-[Cormorant_Garamond] italic text-2xl font-light leading-tight max-w-xs text-[#f0ece4]/80">
              A groundbreaking studio redefining film production.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase mb-5 font-light">
              Studio
            </div>
            <ul className="space-y-3 text-sm text-[#f0ece4]/60 font-light">
              <li><a href="#" className="hover:text-[#f0ece4] transition">Facilities</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Locations</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Virtual Production</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Hospitality</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase mb-5 font-light">
              Services
            </div>
            <ul className="space-y-3 text-sm text-[#f0ece4]/60 font-light">
              <li><a href="#" className="hover:text-[#f0ece4] transition">Production</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Post-Production</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Fixer Services</a></li>
              <li><a href="#" className="hover:text-[#f0ece4] transition">Equipment</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase mb-5 font-light">
              Newsletter · Dispatches
            </div>
            <p className="text-sm text-[#f0ece4]/60 mb-5 font-light leading-relaxed">
              Occasional notes from the studio. New productions, facility
              drops, and who's shooting on the estate.
            </p>
            <form className="flex border-b border-[#f0ece4]/20 focus-within:border-[#b89a6a] transition">
              <input
                type="email"
                placeholder="you@production.com"
                className="flex-1 bg-transparent py-3 text-sm text-[#f0ece4] placeholder:text-[#f0ece4]/30 focus:outline-none font-light"
              />
              <button className="text-[10px] tracking-[0.3em] uppercase text-[#b89a6a] hover:text-[#f0ece4] transition font-light">
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-light">
          <div className="text-xs text-[#f0ece4]/40">
            © 2026 NV Films · NV Film Studios Africa. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-[#f0ece4]/50">
            <a href="#" className="hover:text-[#f0ece4] transition">Instagram</a>
            <a href="#" className="hover:text-[#f0ece4] transition">LinkedIn</a>
            <a href="#" className="hover:text-[#f0ece4] transition">Facebook</a>
            <a href="#" className="hover:text-[#f0ece4] transition">Vimeo</a>
          </div>
          <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/40 uppercase">
            Somerset West · New York
          </div>
        </div>
      </div>
    </footer>
  );
}
