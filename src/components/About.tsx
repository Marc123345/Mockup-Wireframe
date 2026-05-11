import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] tracking-[0.3em] text-[#b89a6a] uppercase">
                Lourensford Estate · Somerset West
              </div>
              <div className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light italic mt-2 text-[#f0ece4]">
                4,000 hectares of location.
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 -z-10 w-full h-full border border-[#b89a6a]/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#b89a6a]" />
            <span className="text-[11px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">
              The Studio
            </span>
          </div>

          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-7xl font-light leading-[1.02] tracking-tight text-[#f0ece4]">
            One estate.
            <br />
            Every <span className="italic text-[#b89a6a]">location</span>.
            <br />
            One ecosystem.
          </h2>

          <p className="mt-10 text-[#f0ece4]/70 text-lg leading-relaxed max-w-xl font-light">
            NV Film Studios Africa is a single-site production solution set
            on a 4,000-hectare private property in Somerset West, minutes
            from Cape Town International. Five cutting-edge sound stages,
            vineyard and forest locations, on-site accommodations, catering,
            and post — all under one banner.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 max-w-lg">
            <div className="border-l border-[#b89a6a]/60 pl-5">
              <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/50 uppercase">
                Hosted
              </div>
              <div className="font-[Cormorant_Garamond] text-xl italic mt-2">
                Raised By Wolves · Warrior · Black Sails
              </div>
            </div>
            <div className="border-l border-[#b89a6a]/60 pl-5">
              <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/50 uppercase">
                Ops
              </div>
              <div className="font-[Cormorant_Garamond] text-xl italic mt-2">
                Sustainable · Local-first · Global crews welcome
              </div>
            </div>
          </div>

          <a
            href="#"
            className="mt-14 inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-light text-[#f0ece4] hover:text-[#b89a6a] transition"
          >
            Read the Studio Story
            <span className="w-14 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
