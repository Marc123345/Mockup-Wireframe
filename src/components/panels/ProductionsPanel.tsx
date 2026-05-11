import Wireframe from "../Wireframe";

const productions = [
  { t: "Raised By Wolves", y: "2021", n: "HBO Max", d: "Dir. Ridley Scott", s: "10 episodes · Drama · Sci-fi", loc: "Stage 1 · Forest · Vineyard" },
  { t: "Warrior", y: "2019", n: "Cinemax", d: "Dir. Justin Lin", s: "30 episodes · Action · Period", loc: "Stages 2-3 · Town build" },
  { t: "Black Sails", y: "2014–2017", n: "STARZ", d: "Dougherty & Fong", s: "38 episodes · Period · Marine", loc: "Tank · Coastal locations" },
  { t: "The Vineyard", y: "2024", n: "In production", d: "Dir. TBA", s: "Feature · Drama", loc: "Estate · Lourensford Vines" },
];

export default function ProductionsPanel() {
  return (
    <div className="space-y-20">
      {/* Intro */}
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
        <div className="max-w-3xl">
          <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-5">
            01 · Selected Work
          </div>
          <p className="font-[Cormorant_Garamond] italic text-3xl md:text-5xl font-light leading-[1.1] text-[#f0ece4]">
            "Every morning this tablecloth of cloud would come in — half the
            work was done."
          </p>
          <div className="mt-6 text-[11px] tracking-[0.3em] text-[#f0ece4]/60 uppercase">
            — Sir Ridley Scott · Raised By Wolves
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 border-t border-[#f0ece4]/10 pt-8">
          {[
            { n: "40+", l: "Projects" },
            { n: "12", l: "Countries" },
            { n: "08", l: "Networks" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-[Cormorant_Garamond] text-4xl font-light text-[#f0ece4]">{s.n}</div>
              <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] mt-1 uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Productions grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {productions.map((p, i) => (
          <a key={p.t} href="#" className="group relative block overflow-hidden">
            <Wireframe ratio="aspect-[5/4]" label={`${p.t.toUpperCase()} · KEY STILL`} sublabel={p.s} />
            <div className="mt-5 grid grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase font-light">{p.y} · {p.n}</div>
                <div className="mt-2 font-[Cormorant_Garamond] text-3xl md:text-4xl font-light text-[#f0ece4] group-hover:text-[#b89a6a] transition">{p.t}</div>
                <div className="mt-1 font-[Cormorant_Garamond] italic text-[#f0ece4]/60">{p.d}</div>
                <div className="mt-3 text-xs text-[#f0ece4]/50 font-light">{p.loc}</div>
              </div>
              <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/30 font-light mt-2">0{i + 1}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Clients strip */}
      <div className="border-t border-[#f0ece4]/10 pt-10">
        <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] uppercase font-light mb-6">Networks & Partners</div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 font-[Cormorant_Garamond] italic text-xl md:text-2xl text-[#f0ece4]/50">
          {["HBO", "Netflix", "Apple TV+", "Paramount", "STARZ", "Cinemax", "AMC", "Amazon MGM"].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      <a href="#" className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-light text-[#f0ece4] hover:text-[#b89a6a] transition">
        Full Filmography
        <span className="w-14 h-px bg-current" />
      </a>
    </div>
  );
}
