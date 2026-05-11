import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { cards, type CardKey } from "../data/cards";
import ProductionsPanel from "./panels/ProductionsPanel";
import FacilitiesPanel from "./panels/FacilitiesPanel";
import ServicesPanel from "./panels/ServicesPanel";
import PostPanel from "./panels/PostPanel";
import StudioPanel from "./panels/StudioPanel";
import ContactPanel from "./panels/ContactPanel";

interface Props {
  activeKey: CardKey | null;
  onClose: () => void;
}

const panels: Record<CardKey, React.ComponentType> = {
  productions: ProductionsPanel,
  facilities: FacilitiesPanel,
  services: ServicesPanel,
  post: PostPanel,
  studio: StudioPanel,
  contact: ContactPanel,
};

export default function CardOverlay({ activeKey, onClose }: Props) {
  const card = activeKey ? cards.find((c) => c.key === activeKey) : null;
  const Panel = activeKey ? panels[activeKey] : null;

  useEffect(() => {
    if (!activeKey) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeKey, onClose]);

  return (
    <AnimatePresence mode="wait">
      {card && Panel && (
        <motion.div
          key={card.key}
          layoutId={`card-${card.key}`}
          className="fixed inset-0 z-[80] bg-[#0a0a0a] overflow-y-auto"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative h-[60svh] md:h-[70svh] overflow-hidden">
            <motion.div
              layoutId={`card-image-${card.key}`}
              className="absolute inset-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/30" />

            <div className="absolute top-0 inset-x-0 p-6 md:p-10 flex items-center justify-between">
              <motion.div
                layoutId={`card-number-${card.key}`}
                className="font-[Cormorant_Garamond] italic text-[#b89a6a] text-xl"
              >
                {card.number}
              </motion.div>
              <button
                onClick={onClose}
                className="group flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-light text-[#f0ece4] hover:text-[#b89a6a] transition"
              >
                <span>Close</span>
                <span className="relative w-10 h-10 border border-[#f0ece4]/30 group-hover:border-[#b89a6a] grid place-items-center transition">
                  <span className="absolute w-3 h-px bg-current rotate-45" />
                  <span className="absolute w-3 h-px bg-current -rotate-45" />
                </span>
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-[1440px] mx-auto w-full">
              <motion.div
                layoutId={`card-label-${card.key}`}
                className="text-[10px] tracking-[0.4em] text-[#b89a6a] uppercase font-light mb-4"
              >
                {card.label}
              </motion.div>
              <motion.h1
                layoutId={`card-title-${card.key}`}
                className="font-[Cormorant_Garamond] text-7xl md:text-[10rem] font-light leading-[0.9] tracking-tight text-[#f0ece4]"
              >
                {card.title}
              </motion.h1>
              <motion.div
                layoutId={`card-tagline-${card.key}`}
                className="mt-4 font-[Cormorant_Garamond] italic text-xl md:text-2xl text-[#f0ece4]/70"
              >
                {card.tagline}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-6 md:px-10 py-20 md:py-28 max-w-[1440px] mx-auto"
          >
            <Panel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border-t border-[#f0ece4]/10 px-6 md:px-10 py-10 flex items-center justify-between max-w-[1440px] mx-auto"
          >
            <button
              onClick={onClose}
              className="text-[11px] tracking-[0.3em] uppercase font-light text-[#f0ece4]/60 hover:text-[#f0ece4] transition"
            >
              ← Back to Index
            </button>
            <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/30 uppercase">
              {card.number} / 06
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
