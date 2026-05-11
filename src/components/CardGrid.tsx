import Card from "./Card";
import { cards, type CardKey } from "../data/cards";
import { motion } from "framer-motion";

interface Props {
  onOpen: (key: CardKey) => void;
}

export default function CardGrid({ onOpen }: Props) {
  return (
    <section className="relative px-6 md:px-10 pb-32">
      <div className="max-w-[1440px] mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          {/* Entity pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {[
              { name: "NV Film Studios Africa", url: "nvfilmstudiosafrica.com" },
              { name: "NV Film Services", url: "nv-films.com" },
            ].map((e) => (
              <div
                key={e.name}
                className="flex items-center gap-2.5 border border-[#b89a6a]/30 px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89a6a]" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-light text-[#b89a6a]">
                  {e.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#f0ece4]/30 font-light hidden md:inline">
                  ↗ {e.url}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#b89a6a]" />
                <span className="text-[11px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">
                  Two entities · One world
                </span>
              </div>
              <h2 className="font-[Cormorant_Garamond] text-5xl md:text-7xl font-light leading-none tracking-tight text-[#f0ece4]">
                Explore the <span className="italic text-[#b89a6a]">NV universe.</span>
              </h2>
              <p className="mt-4 text-sm text-[#f0ece4]/50 font-light max-w-lg leading-relaxed">
                NV Film Studios Africa brings the infrastructure. NV Film Services brings the expertise.
                Together — one seamless production destination.
              </p>
            </div>
            <div className="hidden md:block text-[11px] tracking-[0.3em] text-[#f0ece4]/30 uppercase font-light text-right">
              06 Sections<br />
              <span className="text-[9px] text-[#f0ece4]/20">Select any to explore</span>
            </div>
          </div>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[280px]">
          {cards.map((c, i) => (
            <Card key={c.key} card={c} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
