import Wireframe from "../Wireframe";

const services = [
  {
    n: "01",
    t: "Production",
    d: "Full production services — scouting, crews, permits, fixers, on-set management.",
    items: ["Line producers", "Local crew sourcing", "Permits & customs", "Fixer support", "Insurance & indemnity"],
  },
  {
    n: "02",
    t: "Locations",
    d: "4,000 hectares of vineyard, forest, mountain, ocean — plus the Western Cape.",
    items: ["On-estate locations", "Regional scouting (SA-wide)", "Negotiation & clearances", "Location lock packages"],
  },
  {
    n: "03",
    t: "Hospitality",
    d: "On-site accommodations and catering. Cast, crew, client — one place.",
    items: ["180 beds · on-estate", "Crew dining 3 meals/day", "VIP talent cottages", "Transport & logistics"],
  },
  {
    n: "04",
    t: "Equipment",
    d: "Grip, lighting, camera via Hollywood Studio partnerships. Specialty on request.",
    items: ["ARRI / RED / Sony bodies", "Full grip & lighting packages", "Cranes, dollies, car rigs", "Specialty: drone, underwater, mo-cap"],
  },
];

export default function ServicesPanel() {
  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10">
        <p className="max-w-2xl text-lg md:text-xl text-[#f0ece4]/75 font-light leading-relaxed">
          One partner. Every department. NV Films handles everything so your
          production only handles the creative.
        </p>
        <Wireframe ratio="aspect-[5/3]" label="DEPARTMENT DIAGRAM" sublabel="Production ↔ Studio ↔ Post" />
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[#f0ece4]/5">
        {services.map((s) => (
          <div key={s.n} className="bg-[#0a0a0a] p-10 hover:bg-[#f0ece4]/[0.02] transition group flex flex-col gap-8">
            <div className="flex items-start justify-between">
              <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">Service · {s.n}</div>
              <div className="font-[Cormorant_Garamond] italic text-[#f0ece4]/20 group-hover:text-[#b89a6a]/40 transition text-5xl">{s.n}</div>
            </div>
            <div>
              <h3 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light text-[#f0ece4]">{s.t}</h3>
              <p className="mt-4 text-sm text-[#f0ece4]/60 font-light leading-relaxed max-w-sm">{s.d}</p>
            </div>
            <ul className="space-y-2 text-sm text-[#f0ece4]/70 font-light">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 pb-2 border-b border-[#f0ece4]/5">
                  <span className="text-[#b89a6a] text-xs mt-1">◆</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Workflow */}
      <div className="border-t border-[#f0ece4]/10 pt-10">
        <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-8">The Workflow</div>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: "01", s: "Brief", d: "You bring the script. We read." },
            { n: "02", s: "Scout", d: "Recce, stage selection, budget." },
            { n: "03", s: "Crew", d: "HODs locked, permits filed." },
            { n: "04", s: "Shoot", d: "On-estate or anywhere in SA." },
            { n: "05", s: "Deliver", d: "Post in-house or partnered." },
          ].map((w) => (
            <div key={w.n} className="p-6 border border-[#f0ece4]/10">
              <div className="font-[Cormorant_Garamond] italic text-[#b89a6a] text-2xl">{w.n}</div>
              <div className="mt-3 font-[Cormorant_Garamond] text-2xl text-[#f0ece4]">{w.s}</div>
              <p className="mt-2 text-xs text-[#f0ece4]/50 font-light">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
