import { motion } from "framer-motion";
import Wireframe from "./Wireframe";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.14,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Wireframe fill label="HERO · REEL / PLATE" sublabel="4K cinematic landscape — Cape Town" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/70 to-[#0b0b0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a]/80 via-transparent to-[#0b0b0a]/40" />
      </div>

      <div className="absolute top-28 left-6 md:left-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 flex items-center gap-3 z-10">
        <span>01 · HOME</span>
        <span className="w-10 h-px bg-[#c8a86a]/40" />
        <span>CAPE TOWN · 33.9°S</span>
      </div>
      <div className="absolute top-28 right-6 md:right-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 hidden md:block z-10">
        REEL 2026 · MM.DD
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-24">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-[#c8a86a]" />
          <span className="text-[11px] tracking-[0.4em] text-[#c8a86a] font-light uppercase">
            Global Production Services · Flagship Studio, South Africa
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-[Cormorant_Garamond] font-light tracking-[-0.02em] leading-[0.92] text-[14vw] md:text-[9vw] lg:text-[8.5rem] max-w-6xl text-[#ebe4d4]"
        >
          A groundbreaking
          <br />
          studio <span className="italic text-[#c8a86a]">redefining</span>
          <br />
          film production.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-xl text-[#ebe4d4]/70 text-lg leading-relaxed font-light"
        >
          NV Films is your dedicated production service partner. Anchored on
          Lourensford Estate — a 4,000-hectare private property in Somerset
          West, 30 minutes from Cape Town International.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex items-center gap-4 text-[10px] tracking-[0.3em] text-[#ebe4d4]/40 uppercase"
        >
          <span>Select a chapter below</span>
          <span className="w-10 h-px bg-gradient-to-r from-[#ebe4d4]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
