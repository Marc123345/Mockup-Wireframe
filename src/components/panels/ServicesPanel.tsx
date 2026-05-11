import Wireframe from "../Wireframe";

const services = [
  {
    n: "01",
    t: "Line Producing",
    d: "Experienced line producers embedded in your production. From prep through wrap — schedules, logistics, and daily operations.",
    items: ["Production scheduling", "Budget tracking & cost reporting", "Department head oversight", "Wrap coordination"],
  },
  {
    n: "02",
    t: "Budgeting",
    d: "Detailed South African budget preparation. Accurate local rates, currency management, and rebate modelling.",
    items: ["Above & below-the-line budgets", "SA tax incentive modelling", "Currency hedging advice", "Revised actuals on request"],
  },
  {
    n: "03",
    t: "Payroll & Accounting",
    d: "Full entertainment payroll and production accounting. Compliant, timely, and built for international co-productions.",
    items: ["SA & international cast/crew payroll", "PAYE & UIF compliance", "Guild & union remittances", "Cost reports & audit packs"],
  },
  {
    n: "04",
    t: "Fixer Services",
    d: "On-the-ground support across South Africa. Permits, customs, logistics, and introductions — everything that makes a foreign shoot work.",
    items: ["Filming permits (national & local)", "Equipment carnets & customs", "Location negotiation", "Government & community liaison"],
  },
];

export default function ServicesPanel() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-5">
            02 · NV Film Services
          </div>
          <h3 className="font-[Cormorant_Garamond] text-4xl md:text-6xl font-light leading-[1.05] text-[#f0ece4]">
            One partner. <span className="italic text-[#b89a6a]">Every department.</span>
          </h3>
          <p className="mt-8 text-lg text-[#f0ece4]/70 font-light leading-relaxed">
            NV Film Services handles everything so your production only handles
            the creative. Line producing, budgeting, payroll, and fixer support —
            all under one roof.
          </p>
        </div>
        <Wireframe ratio="aspect-[5/3]" label="DEPARTMENT DIAGRAM" sublabel="Production ↔ Studio ↔ Post" />
      </div>

      {/* Services grid */}
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

      {/* SA Incentive callout */}
      <div className="border border-[#b89a6a]/30 p-10 md:p-14">
        <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] font-light uppercase mb-6">
          South Africa Tax Incentive
        </div>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div className="font-[Cormorant_Garamond] text-5xl md:text-7xl font-light text-[#f0ece4]">
              Up to <span className="italic text-[#b89a6a]">35%</span>
            </div>
            <p className="mt-4 text-sm text-[#f0ece4]/60 font-light leading-relaxed max-w-lg">
              The DTIC rebate on qualifying South African spend. NV Film Services
              manages your incentive application from assessment through to
              rebate receipt — including QSPE certification and NFVF submissions.
            </p>
          </div>
          <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase font-light whitespace-nowrap">
            DTIC · NFVF · QSPE
          </div>
        </div>
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
