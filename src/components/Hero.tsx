import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Wireframe from "./Wireframe";

const slides = [
  {
    eyebrow: "Global Production Services · Flagship Studio, South Africa",
    headline: ["A groundbreaking", "studio ", "redefining", "film production."],
    emphasis: 2,
    body:
      "NV Films is your dedicated production service partner. Anchored on Lourensford Estate, 30 minutes from Cape Town International.",
    plate: "HERO 01 · ESTATE AERIAL",
    sub: "Golden hour · Lourensford Estate · Somerset West",
    ctaA: "Watch the Reel",
    ctaB: "Tour the Studio →",
    meta: "REEL 2026 · INTRO",
  },
  {
    eyebrow: "The Studio · 88,000 sq ft",
    headline: ["Five stages.", "Infinite", "set-ups.", ""],
    emphasis: 1,
    body:
      "Five cutting-edge sound stages — from a 30,000 sq ft tank-ready build to a 270° LED virtual production volume.",
    plate: "HERO 02 · STAGE ONE INTERIOR",
    sub: "Tank-ready · 60 ft grid height · silent HVAC",
    ctaA: "Explore Facilities",
    ctaB: "Book a Site Visit →",
    meta: "REEL 2026 · FACILITIES",
  },
  {
    eyebrow: "Selected Work · 40+ Productions",
    headline: ["Raised", "By Wolves.", "Warrior.", "Black Sails."],
    emphasis: 0,
    body:
      "Home to Ridley Scott's sci-fi epic, Justin Lin's period action, and Starz's era-defining pirate drama.",
    plate: "HERO 03 · PRODUCTION STILLS",
    sub: "Selected frames · 2014 – 2024",
    ctaA: "See the Catalogue",
    ctaB: "Press Quotes →",
    meta: "REEL 2026 · PRODUCTIONS",
  },
  {
    eyebrow: "End-to-End · One Partner",
    headline: ["Concept.", "Capture.", "Final cut.", "Under one roof."],
    emphasis: 3,
    body:
      "Production, locations, hospitality, and post — in-house or partnered. You bring the script, we handle the rest.",
    plate: "HERO 04 · WORKFLOW",
    sub: "Brief → Scout → Crew → Shoot → Deliver",
    ctaA: "Our Services",
    ctaB: "Start an Inquiry →",
    meta: "REEL 2026 · WORKFLOW",
  },
];

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] as [number, number, number, number] },
  },
};

const AUTO_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide stack (image + gradient) */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="absolute inset-0"
        >
          <Wireframe fill label={slide.plate} sublabel={slide.sub} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/70 to-[#0b0b0a]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a]/80 via-transparent to-[#0b0b0a]/40 pointer-events-none" />

      {/* Top framing marks */}
      <div className="absolute top-28 left-6 md:left-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 flex items-center gap-3 z-20">
        <span>
          {String(index + 1).padStart(2, "0")} · {slide.meta.split(" · ")[1]}
        </span>
        <span className="w-10 h-px bg-[#c8a86a]/40" />
        <span>CAPE TOWN · 33.9°S</span>
      </div>
      <div className="absolute top-28 right-6 md:right-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 hidden md:block z-20">
        {slide.meta}
      </div>

      {/* Slide copy */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 w-full pb-24 md:pb-32 pt-44 md:pt-56 z-10 flex flex-col justify-end min-h-[100svh]">
        <AnimatePresence mode="wait">
          <motion.div key={`slide-${index}`} className="max-w-5xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-[#c8a86a]" />
              <span className="text-[11px] tracking-[0.4em] text-[#c8a86a] font-light uppercase">
                {slide.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="exit"
              className="font-[Cormorant_Garamond] font-light tracking-[-0.02em] leading-[0.92] text-[13vw] md:text-[8.5vw] lg:text-[8rem] text-[#ebe4d4]"
            >
              {slide.headline.map((w, i) =>
                w ? (
                  <span key={i}>
                    {i === slide.emphasis ? (
                      <span className="italic text-[#c8a86a]">{w} </span>
                    ) : (
                      <>{w} </>
                    )}
                    {i === 0 || i === 1 ? (
                      <br className="hidden sm:block" />
                    ) : null}
                  </span>
                ) : null
              )}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-10 max-w-xl text-[#ebe4d4]/70 text-lg leading-relaxed font-light"
            >
              {slide.body}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-[#ebe4d4] text-[#0b0b0a] px-8 py-4 text-[11px] font-medium tracking-[0.3em] uppercase hover:bg-[#c8a86a] transition"
              >
                {slide.ctaA}
                <span className="w-5 h-px bg-[#0b0b0a] group-hover:w-10 transition-all" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-[#ebe4d4]/20 hover:border-[#ebe4d4]/60 px-8 py-4 text-[11px] font-light tracking-[0.3em] uppercase backdrop-blur-sm transition text-[#ebe4d4]"
              >
                {slide.ctaB}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls row */}
        <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-8 border-t border-[#ebe4d4]/10 relative z-10">
          {/* Dots + pager */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="group w-11 h-11 border border-[#ebe4d4]/20 hover:border-[#c8a86a] grid place-items-center transition"
              >
                <span className="text-[#ebe4d4] group-hover:text-[#c8a86a] transition text-sm">
                  ←
                </span>
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next slide"
                className="group w-11 h-11 border border-[#ebe4d4]/20 hover:border-[#c8a86a] grid place-items-center transition"
              >
                <span className="text-[#ebe4d4] group-hover:text-[#c8a86a] transition text-sm">
                  →
                </span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-10 h-px bg-[#ebe4d4]/20" />
              <span className="text-[11px] tracking-[0.3em] text-[#ebe4d4]/40 font-light">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Slide labels / dots */}
          <div className="flex flex-wrap items-center gap-6">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-light transition ${
                  i === index
                    ? "text-[#ebe4d4]"
                    : "text-[#ebe4d4]/30 hover:text-[#ebe4d4]/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className="relative inline-block w-10 h-px bg-[#ebe4d4]/15 overflow-hidden">
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-[#c8a86a]"
                    initial={false}
                    animate={{
                      width: i === index ? (paused ? "100%" : "100%") : "0%",
                    }}
                    transition={{
                      duration:
                        i === index && !paused ? AUTO_MS / 1000 : 0.25,
                      ease: "linear",
                    }}
                    key={`${index}-${paused}-${i === index}`}
                  />
                </span>
                {s.meta.split(" · ")[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pause indicator */}
      <div className="absolute bottom-6 right-6 md:right-10 text-[9px] tracking-[0.3em] text-[#ebe4d4]/30 uppercase z-10">
        {paused ? "◧ Paused" : "▸ Auto · 7s"}
      </div>
    </section>
  );
}
