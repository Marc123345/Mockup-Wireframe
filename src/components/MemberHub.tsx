import { motion } from "framer-motion";

const stages = [
  {
    name: "Stage One",
    size: "30,000 sq ft",
    note: "Largest sound stage on the African continent. Tank-ready.",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&auto=format&fit=crop",
  },
  {
    name: "Stage Two & Three",
    size: "18,000 sq ft · each",
    note: "Paired stages with shared green room + catering bay.",
    img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=900&auto=format&fit=crop",
  },
  {
    name: "Stage Four",
    size: "12,000 sq ft",
    note: "Insert stage with full rigging grid and motion-capture volume.",
    img: "https://images.unsplash.com/photo-1504253163759-c23fccaebb55?w=900&auto=format&fit=crop",
  },
  {
    name: "Stage Five",
    size: "10,000 sq ft · LED",
    note: "Virtual production stage. 270° LED volume with real-time engine.",
    img: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=900&auto=format&fit=crop",
  },
];

export default function MemberHub() {
  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden border-t border-[#ebe4d4]/5">
      <div className="absolute inset-0 -z-10 cinematic-gradient" />

      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#c8a86a]" />
              <span className="text-[11px] tracking-[0.4em] text-[#c8a86a] font-light uppercase">
                Facilities
              </span>
            </div>
            <h2 className="font-[Cormorant_Garamond] text-6xl md:text-8xl font-light leading-[1] tracking-tight text-[#ebe4d4]">
              Five stages.
              <br />
              <span className="italic text-[#c8a86a]">Infinite</span> setups.
            </h2>
          </div>
          <p className="text-[#ebe4d4]/70 max-w-sm font-light leading-relaxed">
            Purpose-built for episodic and feature work — from practical
            tank shoots to full virtual-production LED volumes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[5/4] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/40 to-[#0b0b0a]/10" />

              <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] font-light text-[#c8a86a]">
                0{i + 1}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[10px] tracking-[0.3em] text-[#ebe4d4]/60 uppercase">
                  {s.size}
                </div>
                <div className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light mt-2 text-[#ebe4d4]">
                  {s.name}
                </div>
                <p className="mt-3 text-sm text-[#ebe4d4]/70 font-light max-w-md leading-relaxed">
                  {s.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ridley Scott quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="text-[10px] tracking-[0.4em] text-[#c8a86a] font-light mb-8 uppercase">
            ✦ ✦ ✦
          </div>
          <p className="font-[Cormorant_Garamond] italic text-3xl md:text-5xl font-light leading-[1.15] text-[#ebe4d4]">
            "Every morning this tablecloth of cloud would come in — half the
            work was done."
          </p>
          <div className="mt-8 text-[11px] tracking-[0.3em] text-[#ebe4d4]/60 uppercase">
            — Sir Ridley Scott · on shooting Raised By Wolves
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
