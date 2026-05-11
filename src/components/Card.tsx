import { motion } from "framer-motion";
import Wireframe from "./Wireframe";
import type { CardContent } from "../data/cards";

interface Props {
  card: CardContent;
  onOpen: (key: CardContent["key"]) => void;
  index: number;
}

export default function Card({ card, onOpen, index }: Props) {
  const spanClass =
    card.size === "lg"
      ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
      : "aspect-[4/5]";

  return (
    <motion.button
      layoutId={`card-${card.key}`}
      onClick={() => onOpen(card.key)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden text-left cursor-pointer ${spanClass}`}
    >
      <motion.div layoutId={`card-image-${card.key}`} className="absolute inset-0">
        <Wireframe fill label={`${card.title.toUpperCase()} · PLATE`} sublabel={card.tagline} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/10" />
      <div className="absolute inset-0 border border-[#f0ece4]/5 group-hover:border-[#b89a6a]/60 transition duration-500" />

      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        <motion.div
          layoutId={`card-number-${card.key}`}
          className="font-[Cormorant_Garamond] italic text-[#b89a6a] text-xl"
        >
          {card.number}
        </motion.div>
        <div className="w-8 h-8 border border-[#f0ece4]/30 grid place-items-center opacity-0 group-hover:opacity-100 group-hover:border-[#b89a6a] transition duration-500">
          <span className="text-[#f0ece4] text-sm">↗</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <motion.div
          layoutId={`card-label-${card.key}`}
          className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase font-light mb-2"
        >
          {card.label}
        </motion.div>
        <motion.div
          layoutId={`card-title-${card.key}`}
          className={`font-[Cormorant_Garamond] font-light leading-[0.95] text-[#f0ece4] ${
            card.size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
          }`}
        >
          {card.title}
        </motion.div>
        <motion.div
          layoutId={`card-tagline-${card.key}`}
          className="mt-3 font-[Cormorant_Garamond] italic text-[#f0ece4]/60 text-sm md:text-base"
        >
          {card.tagline}
        </motion.div>
        <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#f0ece4]/30 group-hover:text-[#f0ece4] transition font-light">
          ENTER
          <span className="w-10 h-px bg-current" />
        </div>
      </div>
    </motion.button>
  );
}
