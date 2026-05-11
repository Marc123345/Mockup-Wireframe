import Wireframe from "../Wireframe";

const stages = [
  { n: "Stage One", s: "30,000 sq ft", h: "Tank-ready", d: "Largest sound stage on the continent. Built-in water tank, 60 ft clear height, heavy rigging, silent HVAC." },
  { n: "Stage Two", s: "18,000 sq ft", h: "Paired", d: "Paired with Stage Three via shared green room, wardrobe, and catering bay. Ideal for episodic." },
  { n: "Stage Three", s: "18,000 sq ft", h: "Paired", d: "Mirrored build to Stage Two. Full blackout, 40 ft clear, dedicated loading dock." },
  { n: "Stage Four", s: "12,000 sq ft", h: "Insert + Mo-cap", d: "Insert stage with truss grid, mo-cap volume, and control room. Perfect for creature or pickups." },
  { n: "Stage Five", s: "10,000 sq ft", h: "LED · Virtual Production", d: "270° LED volume with real-time engine, tracked camera, and full previs-to-finals pipeline." },
];

export default function FacilitiesPanel() {
  return (
    <div className="space-y-16">
      {/* Entity intro */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-5">
            01 · NV Film Studios Africa
          </div>
          <h3 className="font-[Cormorant_Garamond] text-4xl md:text-6xl font-light leading-[1.05] text-[#f0ece4]">
            Africa's premier <span className="italic text-[#b89a6a]">studio destination.</span>
          </h3>
          <p className="mt-8 text-lg text-[#f0ece4]/70 font-light leading-relaxed">
            Five cutting-edge sound stages on a 4,000-hectare private wine estate.
            Purpose-built for episodic and feature work — from practical tank
            shoots to full LED virtual production.
          </p>
        </div>
        <Wireframe ratio="aspect-[5/3]" label="NVFSA · STAGE ONE" sublabel="30,000 sq ft · tank-ready · 60 ft grid" />
      </div>

      {/* Stat row */}
      <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-[#f0ece4]/10">
        {[
          { n: "5", l: "Stages" },
          { n: "88,000", l: "Sq Ft · Total" },
          { n: "4,000", l: "Hectares" },
          { n: "30 min", l: "From CPT Airport" },
        ].map((s) => (
          <div key={s.l}>
            <div className="font-[Cormorant_Garamond] text-5xl md:text-6xl font-light text-[#f0ece4]">{s.n}</div>
            <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] mt-2 uppercase font-light">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Site plan wireframe */}
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
        <Wireframe ratio="aspect-[4/3]" label="SITE PLAN · LOURENSFORD ESTATE" sublabel="5 stages · workshops · catering · housing" />
        <div className="space-y-4">
          <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">Adjacent Infrastructure</div>
          <ul className="space-y-3 text-sm text-[#f0ece4]/70 font-light">
            {[
              "Production offices — 12,000 sq ft",
              "Carpentry, paint, and construction workshops",
              "Wardrobe, hair & make-up trailers",
              "Caterer's kitchen + crew dining",
              "On-site accommodations — 180 beds",
              "Secure vehicle and equipment yards",
              "Helipad · fire & medical standby",
            ].map((i) => (
              <li key={i} className="flex gap-3 pt-3 border-t border-[#f0ece4]/5">
                <span className="text-[#b89a6a] text-xs mt-1">◆</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stage list */}
      <div className="space-y-px bg-[#f0ece4]/5">
        {stages.map((s, i) => (
          <div key={s.n} className="group bg-[#0a0a0a] hover:bg-[#f0ece4]/[0.02] p-8 md:p-10 grid md:grid-cols-[60px_1fr_auto_auto] gap-6 md:gap-10 items-center transition">
            <div className="font-[Cormorant_Garamond] italic text-[#b89a6a] text-3xl">0{i + 1}</div>
            <div>
              <div className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light text-[#f0ece4]">{s.n}</div>
              <p className="mt-2 text-sm text-[#f0ece4]/60 font-light max-w-xl">{s.d}</p>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#f0ece4]/50 font-light">{s.h}</div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#b89a6a] font-light">{s.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
