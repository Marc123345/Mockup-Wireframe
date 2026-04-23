export default function Footer() {
  return (
    <footer className="relative border-t border-[#ebe4d4]/10 pt-20 pb-10 px-6 md:px-10 bg-[#0b0b0a]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-[#ebe4d4]/5">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#c8a86a]/60 grid place-items-center">
                <span className="font-[Cormorant_Garamond] italic font-bold text-xl text-[#ebe4d4]">
                  NV
                </span>
              </div>
              <div>
                <div className="font-[Cormorant_Garamond] italic text-lg">
                  NV Films
                </div>
                <div className="font-light tracking-[0.3em] text-[9px] text-[#c8a86a]/80 uppercase">
                  Global · Cape Town
                </div>
              </div>
            </div>
            <p className="font-[Cormorant_Garamond] italic text-2xl font-light leading-tight max-w-xs text-[#ebe4d4]/80">
              A groundbreaking studio redefining film production.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-5 font-light">
              Studio
            </div>
            <ul className="space-y-3 text-sm text-[#ebe4d4]/60 font-light">
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Facilities</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Locations</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Virtual Production</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Hospitality</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-5 font-light">
              Services
            </div>
            <ul className="space-y-3 text-sm text-[#ebe4d4]/60 font-light">
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Production</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Post-Production</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Fixer Services</a></li>
              <li><a href="#" className="hover:text-[#ebe4d4] transition">Equipment</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-5 font-light">
              Newsletter · Dispatches
            </div>
            <p className="text-sm text-[#ebe4d4]/60 mb-5 font-light leading-relaxed">
              Occasional notes from the studio. New productions, facility
              drops, and who's shooting on the estate.
            </p>
            <form className="flex border-b border-[#ebe4d4]/20 focus-within:border-[#c8a86a] transition">
              <input
                type="email"
                placeholder="you@production.com"
                className="flex-1 bg-transparent py-3 text-sm text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none font-light"
              />
              <button className="text-[10px] tracking-[0.3em] uppercase text-[#c8a86a] hover:text-[#ebe4d4] transition font-light">
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-light">
          <div className="text-xs text-[#ebe4d4]/40">
            © 2026 NV Films · NV Film Studios Africa. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-[#ebe4d4]/50">
            <a href="#" className="hover:text-[#ebe4d4] transition">Instagram</a>
            <a href="#" className="hover:text-[#ebe4d4] transition">LinkedIn</a>
            <a href="#" className="hover:text-[#ebe4d4] transition">Facebook</a>
            <a href="#" className="hover:text-[#ebe4d4] transition">Vimeo</a>
          </div>
          <div className="text-[10px] tracking-[0.3em] text-[#ebe4d4]/40 uppercase">
            Somerset West · New York
          </div>
        </div>
      </div>
    </footer>
  );
}
