import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    t: "Production",
    d: "Full production services — from scouting and crew to fixer support, permits, and on-set management.",
  },
  {
    n: "02",
    t: "Locations",
    d: "4,000 hectares of vineyards, forests, ocean, and rolling hills — plus the Western Cape at your back door.",
  },
  {
    n: "03",
    t: "Post",
    d: "In-house edit suites, sound design, and color — or plug straight into your preferred post house.",
  },
  {
    n: "04",
    t: "Hospitality",
    d: "On-site accommodations and catering. Cast, crew, and client all in one place.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 px-6 md:px-10 border-t border-[#f0ece4]/5">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#b89a6a]" />
              <span className="text-[11px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">
                End-to-End
              </span>
            </div>
            <h2 className="font-[Cormorant_Garamond] text-6xl md:text-8xl font-light leading-[1.02] tracking-tight text-[#f0ece4] max-w-3xl">
              One partner.
              <br />
              <span className="italic text-[#b89a6a]">Every</span> department.
            </h2>
          </div>
          <p className="text-[#f0ece4]/60 max-w-sm font-light">
            NV Films handles everything — so your production only handles
            the creative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#f0ece4]/5">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[#0a0a0a] p-10 hover:bg-[#f0ece4]/[0.02] transition cursor-pointer min-h-[320px] flex flex-col justify-between"
            >
              <div className="font-[Cormorant_Garamond] text-[9rem] italic font-light text-[#f0ece4]/5 group-hover:text-[#b89a6a]/20 transition absolute -top-2 right-4 leading-none">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-[10px] tracking-[0.4em] text-[#b89a6a] uppercase mb-4 font-light">
                  Service · {s.n}
                </div>
                <h3 className="font-[Cormorant_Garamond] text-4xl font-light mb-5 text-[#f0ece4]">
                  {s.t}
                </h3>
                <p className="text-sm text-[#f0ece4]/60 leading-relaxed max-w-xs font-light">
                  {s.d}
                </p>
              </div>
              <div className="relative mt-10 text-[10px] tracking-[0.3em] text-[#f0ece4]/30 group-hover:text-[#f0ece4] transition font-light">
                EXPLORE ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
