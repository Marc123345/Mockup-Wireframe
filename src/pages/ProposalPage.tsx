import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Wireframe from "../components/Wireframe";
import { cards as siteCards } from "../data/cards";

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const chapters = [
  { n: "01", t: "Productions", d: "Credits, networks, press" },
  { n: "02", t: "Facilities", d: "5 sound stages, site plan" },
  { n: "03", t: "Services", d: "Production, locations, hospitality" },
  { n: "04", t: "Post", d: "Edit, color, sound, VFX" },
  { n: "05", t: "The Estate", d: "Lourensford, 12-biome deck" },
  { n: "06", t: "Contact", d: "Inquiry form + routing" },
];

const deliverables = [
  "Unified responsive single-page site (React · Vite · Framer Motion)",
  "Six animated chapter overlays with full content",
  "Four-slide auto-advancing hero carousel",
  "Contact form with production-type intake",
  "Copywriting pass + SEO foundation (meta, schema, OG)",
  "Design system + style guide documentation",
  "Analytics install (GA4 or Plausible)",
  "Mobile, tablet, desktop tested",
];

const timeline = [
  { w: "Week 01", t: "Discovery", d: "Content pass · wireframe sign-off · asset audit" },
  { w: "Week 02", t: "Design", d: "Design system · hero carousel · card grid" },
  { w: "Week 03", t: "Build", d: "All six overlays · forms · mobile behavior" },
  { w: "Week 04", t: "Launch", d: "SEO · analytics · QA · go live" },
];

const pricing = [
  { label: "Design", amount: "$1,000", note: "Design system, layouts, wireframes" },
  { label: "Development", amount: "$2,000", note: "Build, animations, routing, forms" },
  { label: "Content & SEO", amount: "$1,000", note: "Copy, meta, schema, analytics" },
];

const included = [
  { t: "12 Months Maintenance", d: "Bug fixes, small content updates, dependency upgrades" },
  { t: "12 Months Hosting", d: "Vercel production, SSL, global CDN — no monthly fee" },
  { t: "Domain Setup", d: "DNS, email forwarding, certificate configuration" },
  { t: "Launch Walkthrough", d: "Admin handover session + written runbook" },
];

export default function ProposalPage() {
  return (
    <div className="grain relative min-h-screen bg-[#0b0b0a] text-[#ebe4d4]">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0b0b0a]/80 border-b border-[#ebe4d4]/5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-[#c8a86a]/60 grid place-items-center">
              <span className="font-[Cormorant_Garamond] italic font-bold text-xl text-[#ebe4d4]">
                NV
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-[Cormorant_Garamond] italic text-lg">
                NV Films
              </span>
              <span className="font-light tracking-[0.3em] text-[9px] text-[#c8a86a]/80 uppercase">
                Proposal · 2026
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.3em] uppercase text-[#ebe4d4]/50 font-light">
            <span>DOC · NVF-2026-01</span>
            <span className="w-8 h-px bg-[#ebe4d4]/20" />
            <span className="text-[#c8a86a]">CONFIDENTIAL</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-[#c8a86a]/60 hover:border-[#c8a86a] px-5 py-2.5 text-[11px] font-light tracking-[0.3em] uppercase hover:bg-[#c8a86a]/10 transition"
          >
            ← Back to Mockup
          </Link>
        </div>
      </header>

      {/* Cover */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Wireframe fill label="COVER PLATE · HERO FRAME" sublabel="4K cinematic landscape" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/70 to-[#0b0b0a]/30" />
        </div>

        <div className="absolute top-28 left-6 md:left-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 flex items-center gap-3 z-10">
          <span>00 · COVER</span>
          <span className="w-10 h-px bg-[#c8a86a]/40" />
          <span>APRIL 2026</span>
        </div>
        <div className="absolute top-28 right-6 md:right-10 text-[10px] tracking-[0.3em] text-[#c8a86a]/80 hidden md:block z-10">
          PREPARED BY · MARC FRIEDMAN
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 w-full pb-20 md:pb-28">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c8a86a]" />
            <span className="text-[11px] tracking-[0.4em] text-[#c8a86a] font-light uppercase">
              Website Concept · Proposal
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="font-[Cormorant_Garamond] font-light tracking-[-0.02em] leading-[0.92] text-[14vw] md:text-[8.5vw] lg:text-[9rem] text-[#ebe4d4]">
            A concept for
            <br />
            <span className="italic text-[#c8a86a]">NV Films.</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-10 max-w-xl text-[#ebe4d4]/70 text-lg leading-relaxed font-light">
            Unifying NV Film Services and NV Film Studios Africa into one
            cinematic destination — a single site that wins both the
            commissioning producer and the scout.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mt-14 grid md:grid-cols-4 gap-6 pt-8 border-t border-[#ebe4d4]/10">
            {[
              { l: "Prepared for", v: "NV Films" },
              { l: "Prepared by", v: "Marc Friedman" },
              { l: "Document", v: "NVF-2026-01" },
              { l: "Validity", v: "30 Days" },
            ].map((m) => (
              <div key={m.l}>
                <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light">{m.l}</div>
                <div className="mt-2 font-[Cormorant_Garamond] text-2xl text-[#ebe4d4] font-light">{m.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section: Opportunity */}
      <Section number="01" eyebrow="The Opportunity" title={<>Two brands.<br />One decision.</>}>
        <p className="text-lg text-[#ebe4d4]/75 font-light leading-relaxed max-w-2xl">
          NV Film Services and NV Film Studios Africa operate as two separate
          digital properties. A commissioning producer researching Cape Town
          studios lands on one site; a scout looking for production services
          lands on another. The brand is fragmented at the exact moment the
          buyer is deciding.
        </p>
        <p className="mt-6 text-lg text-[#ebe4d4]/75 font-light leading-relaxed max-w-2xl">
          The fix isn't to merge tone. The fix is to build one cinematic
          shell with two clear doors.
        </p>
      </Section>

      {/* Section: Concept */}
      <Section number="02" eyebrow="The Concept" title={<>One empire.<br /><span className="italic text-[#c8a86a]">Two</span> doors.</>}>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-lg text-[#ebe4d4]/75 font-light leading-relaxed">
            A single destination: <em className="not-italic text-[#c8a86a]">NV Films</em> as
            the global production-services brand, with{" "}
            <em className="not-italic text-[#c8a86a]">NV Film Studios Africa</em> as its
            flagship property. One voice, one editorial language, two clear
            entry points for the two audiences — unified under one cinematic
            shell.
          </p>
          <Wireframe ratio="aspect-[5/4]" label="BRAND ARCHITECTURE DIAGRAM" sublabel="NV Films ↔ NV Film Studios Africa" />
        </div>
      </Section>

      {/* Section: Experience */}
      <Section number="03" eyebrow="The Experience" title={<>A cinematic <span className="italic text-[#c8a86a]">index</span>.</>}>
        <p className="text-lg text-[#ebe4d4]/75 font-light leading-relaxed max-w-3xl mb-12">
          Rather than a conventional scrolling homepage, the site opens as an
          index of chapters — six cards laid out as a mosaic. Each card is a
          door. Clicking a card animates it into a full-screen overlay with
          the full depth of that chapter. The homepage becomes a trailer;
          each overlay becomes a short film.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {chapters.map((c) => (
            <div key={c.n} className="relative p-6 border border-[#ebe4d4]/10 hover:border-[#c8a86a]/40 transition group">
              <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-2xl">{c.n}</div>
              <div className="mt-4 font-[Cormorant_Garamond] text-3xl font-light text-[#ebe4d4]">{c.t}</div>
              <div className="mt-2 text-sm text-[#ebe4d4]/60 font-light">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section: Mockup Preview */}
      <Section number="04" eyebrow="The Mockup" title={<>Select a <span className="italic text-[#c8a86a]">chapter</span>.</>}>
        <div className="flex items-end justify-between mb-10">
          <p className="text-lg text-[#ebe4d4]/75 font-light leading-relaxed max-w-2xl">
            Visual preview of the homepage index — six chapter cards in a
            cinematic mosaic. Each card becomes a full-screen overlay on click.
          </p>
          <div className="hidden md:block text-[11px] tracking-[0.3em] text-[#ebe4d4]/40 uppercase font-light">
            06 Sections
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[240px]">
          {siteCards.map((c) => {
            const span =
              c.size === "lg"
                ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                : "aspect-[4/5]";
            return (
              <div
                key={c.key}
                className={`group relative overflow-hidden ${span}`}
              >
                <div className="absolute inset-0">
                  <Wireframe
                    fill
                    label={`${c.title.toUpperCase()} · PLATE`}
                    sublabel={c.tagline}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/40 to-[#0b0b0a]/10" />
                <div className="absolute inset-0 border border-[#ebe4d4]/5 group-hover:border-[#c8a86a]/60 transition duration-500" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-xl">
                    {c.number}
                  </div>
                  <div className="w-8 h-8 border border-[#ebe4d4]/30 grid place-items-center">
                    <span className="text-[#ebe4d4] text-sm">↗</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light mb-2">
                    {c.label}
                  </div>
                  <div
                    className={`font-[Cormorant_Garamond] font-light leading-[0.95] text-[#ebe4d4] ${
                      c.size === "lg"
                        ? "text-4xl md:text-6xl"
                        : "text-3xl md:text-4xl"
                    }`}
                  >
                    {c.title}
                  </div>
                  <div className="mt-3 font-[Cormorant_Garamond] italic text-[#ebe4d4]/60 text-sm">
                    {c.tagline}
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#ebe4d4]/40 font-light">
                    ENTER
                    <span className="w-10 h-px bg-current" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-[#c8a86a]/60 hover:border-[#c8a86a] px-8 py-4 text-[11px] font-light tracking-[0.3em] uppercase hover:bg-[#c8a86a]/10 transition text-[#ebe4d4]"
          >
            View the Live Mockup
            <span>↗</span>
          </Link>
        </div>
      </Section>

      {/* Section: Deliverables */}
      <Section number="05" eyebrow="Scope of Work" title={<>What you <span className="italic text-[#c8a86a]">get</span>.</>}>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {deliverables.map((d, i) => (
            <div key={d} className="flex gap-5 py-5 border-b border-[#ebe4d4]/10">
              <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-xl shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[#ebe4d4]/80 font-light">{d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section: Timeline */}
      <Section number="06" eyebrow="Timeline" title={<>Four weeks to <span className="italic text-[#c8a86a]">launch</span>.</>}>
        <div className="grid md:grid-cols-4 gap-px bg-[#ebe4d4]/5">
          {timeline.map((t) => (
            <div key={t.w} className="bg-[#0b0b0a] p-8 min-h-[200px]">
              <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light">{t.w}</div>
              <div className="mt-4 font-[Cormorant_Garamond] text-3xl text-[#ebe4d4] font-light">{t.t}</div>
              <p className="mt-3 text-sm text-[#ebe4d4]/60 font-light leading-relaxed">{t.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section: Investment */}
      <Section number="07" eyebrow="Investment" title={<>Transparent <span className="italic text-[#c8a86a]">pricing</span>.</>}>
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          <div>
            <div className="divide-y divide-[#ebe4d4]/10">
              {pricing.map((p, i) => (
                <div key={p.label} className="grid grid-cols-[60px_1fr_auto] gap-6 py-6 items-start">
                  <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-xl">0{i + 1}</div>
                  <div>
                    <div className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-light text-[#ebe4d4]">{p.label}</div>
                    <div className="mt-1 text-xs text-[#ebe4d4]/50 font-light">{p.note}</div>
                  </div>
                  <div className="font-[Cormorant_Garamond] text-2xl md:text-3xl text-[#ebe4d4] font-light">{p.amount}</div>
                </div>
              ))}

              <div className="grid grid-cols-[60px_1fr_auto] gap-6 py-8 items-baseline border-t-2 border-[#c8a86a]/40">
                <div />
                <div className="text-[11px] tracking-[0.4em] text-[#c8a86a] uppercase font-light">Total Investment</div>
                <div className="font-[Cormorant_Garamond] text-5xl md:text-6xl text-[#ebe4d4] font-light">$4,000</div>
              </div>
            </div>

            <div className="mt-8 p-6 border border-[#c8a86a]/30 bg-[#c8a86a]/5">
              <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] uppercase font-light mb-3">Payment Schedule</div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-[#ebe4d4]/80 font-light">
                <span>50% deposit to kick off · <strong className="text-[#ebe4d4] font-medium">$2,000</strong></span>
                <span>50% balance on launch · <strong className="text-[#ebe4d4] font-medium">$2,000</strong></span>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-l border-[#c8a86a]/30 pl-8">
            <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] uppercase font-light">
              Included at no extra cost
            </div>
            <div className="font-[Cormorant_Garamond] text-4xl font-light text-[#ebe4d4] leading-tight">
              12 months <br /><span className="italic text-[#c8a86a]">free</span>.
            </div>
            {included.map((i) => (
              <div key={i.t} className="pb-4 border-b border-[#ebe4d4]/10">
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a86a] text-xs mt-1.5">◆</span>
                  <div>
                    <div className="font-[Cormorant_Garamond] text-lg text-[#ebe4d4]">{i.t}</div>
                    <div className="mt-1 text-xs text-[#ebe4d4]/60 font-light">{i.d}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-[10px] tracking-[0.3em] text-[#ebe4d4]/50 uppercase font-light pt-2">
              Bundled value · $1,800+
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Next Steps */}
      <Section number="08" eyebrow="Next Steps" title={<>Let's <span className="italic text-[#c8a86a]">begin</span>.</>}>
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { n: "01", t: "Approve", d: "Sign this proposal — below or via email." },
            { n: "02", t: "Deposit", d: "50% ($2,000) unlocks kickoff within 5 business days." },
            { n: "03", t: "Launch", d: "Go-live in 4 weeks. Balance due on deploy." },
          ].map((s) => (
            <div key={s.n} className="p-8 border border-[#ebe4d4]/10">
              <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-2xl">{s.n}</div>
              <div className="mt-4 font-[Cormorant_Garamond] text-3xl text-[#ebe4d4] font-light">{s.t}</div>
              <p className="mt-3 text-sm text-[#ebe4d4]/60 font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-[#ebe4d4]/10">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] uppercase font-light mb-8">Client</div>
            <div className="border-b border-[#ebe4d4]/20 h-12" />
            <div className="mt-3 flex justify-between text-[11px] tracking-[0.3em] text-[#ebe4d4]/50 uppercase font-light">
              <span>Signature</span>
              <span>Date</span>
            </div>
            <div className="mt-8 font-[Cormorant_Garamond] italic text-[#ebe4d4]/60">
              Printed name · Title · NV Films
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] uppercase font-light mb-8">Prepared by</div>
            <div className="border-b border-[#ebe4d4]/20 h-12 flex items-end pb-2">
              <span className="font-[Cormorant_Garamond] italic text-3xl text-[#c8a86a]">Marc Friedman</span>
            </div>
            <div className="mt-3 flex justify-between text-[11px] tracking-[0.3em] text-[#ebe4d4]/50 uppercase font-light">
              <span>Signature</span>
              <span>April 2026</span>
            </div>
            <div className="mt-8 font-[Cormorant_Garamond] italic text-[#ebe4d4]/60">
              Marc Friedman · Independent · NYC
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#ebe4d4]/5 px-6 md:px-10 py-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#ebe4d4]/40 font-light">
          <div>© 2026 · Proposal NVF-2026-01 · Valid for 30 days from issuance</div>
          <Link to="/" className="text-[#c8a86a] hover:text-[#ebe4d4] transition tracking-[0.3em] uppercase text-[10px]">
            ← Return to Live Mockup
          </Link>
        </div>
      </footer>
    </div>
  );
}

interface SectionProps {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

function Section({ number, eyebrow, title, children }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-[#ebe4d4]/5">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-20 mb-16"
        >
          <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-2 md:min-w-[160px]">
            <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-6xl md:text-8xl font-light">{number}</div>
            <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] uppercase font-light">{eyebrow}</div>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-7xl lg:text-8xl font-light leading-[0.98] tracking-tight text-[#ebe4d4]">
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
