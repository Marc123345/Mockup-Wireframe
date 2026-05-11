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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#b89a6a]" />
              <span className="text-[11px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">
                The Index
              </span>
            </div>
            <h2 className="font-[Cormorant_Garamond] text-5xl md:text-7xl font-light leading-none tracking-tight text-[#f0ece4]">
              Select a <span className="italic text-[#b89a6a]">chapter</span>.
            </h2>
          </div>
          <div className="hidden md:block text-[11px] tracking-[0.3em] text-[#f0ece4]/40 uppercase font-light">
            06 Sections
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[260px]">
          {cards.map((c, i) => (
            <Card key={c.key} card={c} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
