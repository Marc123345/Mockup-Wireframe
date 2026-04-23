export default function ContactPanel() {
  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
      <form className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light block mb-2">Name *</label>
          <input className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition" placeholder="Jane Director" />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light block mb-2">Email *</label>
          <input type="email" className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition" placeholder="hello@production.com" />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light block mb-2">Production Type</label>
          <select className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] focus:outline-none focus:border-[#c8a86a] transition">
            <option className="bg-[#0b0b0a]">Feature Film</option>
            <option className="bg-[#0b0b0a]">Television</option>
            <option className="bg-[#0b0b0a]">Commercial</option>
            <option className="bg-[#0b0b0a]">Documentary</option>
            <option className="bg-[#0b0b0a]">Music Video</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light block mb-2">Tell us about the project</label>
          <textarea rows={5} className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition resize-none" placeholder="Concept, dates, scope..." />
        </div>
        <button type="submit" className="md:col-span-2 justify-self-start mt-4 inline-flex items-center gap-4 bg-[#ebe4d4] text-[#0b0b0a] px-10 py-5 text-[11px] font-medium tracking-[0.3em] uppercase hover:bg-[#c8a86a] transition">
          Send Inquiry
          <span className="w-8 h-px bg-[#0b0b0a]" />
        </button>
      </form>

      <div className="space-y-10 font-light">
        <div>
          <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">Studio · South Africa</div>
          <div className="text-[#ebe4d4]/80 leading-relaxed">Lourensford Estate<br />Somerset West, Cape Town<br />South Africa</div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">Production · Global</div>
          <div className="text-[#ebe4d4]/80 leading-relaxed">hello@nv-films.com<br />+27 21 000 0000</div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">Follow</div>
          <div className="flex gap-5 text-[#ebe4d4]/80 text-sm">
            <a href="#" className="hover:text-[#c8a86a] transition">Instagram</a>
            <a href="#" className="hover:text-[#c8a86a] transition">LinkedIn</a>
            <a href="#" className="hover:text-[#c8a86a] transition">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
