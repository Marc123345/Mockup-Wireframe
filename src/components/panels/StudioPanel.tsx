import Wireframe from "../Wireframe";

export default function StudioPanel() {
  return (
    <div className="space-y-20">
      {/* Intro */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-5">
            05 · Cape Town · South Africa
          </div>
          <h3 className="font-[Cormorant_Garamond] text-4xl md:text-6xl font-light leading-[1.05] text-[#f0ece4]">
            Set on <span className="italic text-[#b89a6a]">Lourensford Estate</span> —
            a 4,000-hectare working wine farm in Somerset West.
          </h3>
          <p className="mt-8 text-lg text-[#f0ece4]/70 font-light leading-relaxed">
            Mountains, vineyards, oak forests, rivers, and cinematic skies —
            all 30 minutes from Cape Town International. The estate is the
            back lot.
          </p>
        </div>
        <Wireframe ratio="aspect-[4/5]" label="ESTATE · AERIAL" sublabel="33.9628° S · 18.9178° E" />
      </div>

      {/* Location deck */}
      <div>
        <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-6">
          Location Deck · 12 Biomes
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "Vineyards", d: "Old-vine Syrah & Chardonnay — working harvest seasons, open rows." },
            { t: "Forests", d: "Planted pine & indigenous — standing in for Europe, Middle Earth, Mars." },
            { t: "Water", d: "Dams, rivers, built tank set — plus 30 min to Atlantic coast." },
            { t: "Sky", d: "The tablecloth. The golden hour that keeps returning." },
            { t: "Mountains", d: "Helderberg face. Rock, scree, alpine meadow within 15 min." },
            { t: "Ocean", d: "Cold Atlantic + warm Indian within 45 min. Cliffs, beaches, harbors." },
            { t: "Town Builds", d: "Legacy Warrior town set — reusable period streets." },
            { t: "Urban", d: "Cape Town CBD — colonial, brutalist, modern. Full permit support." },
          ].map((l) => (
            <div key={l.t} className="p-6 border border-[#f0ece4]/10 hover:border-[#b89a6a]/40 transition group">
              <Wireframe ratio="aspect-[4/3]" label={l.t.toUpperCase()} />
              <div className="mt-5 font-[Cormorant_Garamond] text-2xl font-light text-[#f0ece4]">{l.t}</div>
              <p className="mt-2 text-xs text-[#f0ece4]/50 font-light leading-relaxed">{l.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel matrix */}
      <div className="border-t border-[#f0ece4]/10 pt-10">
        <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-8">
          Travel Matrix · from Estate
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-[#f0ece4]/5">
          {[
            { l: "CPT Airport", v: "30 min" },
            { l: "Cape Town CBD", v: "45 min" },
            { l: "Atlantic Seaboard", v: "50 min" },
            { l: "Wine Country (Stellenbosch)", v: "15 min" },
          ].map((t) => (
            <div key={t.l} className="bg-[#0a0a0a] p-6">
              <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/50 uppercase font-light">{t.l}</div>
              <div className="mt-3 font-[Cormorant_Garamond] text-3xl text-[#f0ece4] font-light">{t.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
