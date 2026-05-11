import { motion } from "framer-motion";

const productions = [
  {
    title: "Raised By Wolves",
    meta: "2021 · HBO MAX",
    director: "Dir. Ridley Scott",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&auto=format&fit=crop",
    tag: "SERIES",
  },
  {
    title: "Warrior",
    meta: "2019 · CINEMAX",
    director: "Dir. Justin Lin",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=900&auto=format&fit=crop",
    tag: "SERIES",
  },
  {
    title: "Black Sails",
    meta: "2014 · STARZ",
    director: "Dir. Dougherty & Fong",
    img: "https://images.unsplash.com/photo-1507358522600-9f71e620c44e?w=900&auto=format&fit=crop",
    tag: "SERIES",
  },
  {
    title: "The Vineyard",
    meta: "2024 · IN PRODUCTION",
    director: "Dir. TBA",
    img: "https://images.unsplash.com/photo-1506501139174-099022df5260?w=900&auto=format&fit=crop",
    tag: "FEATURE",
  },
  {
    title: "Cape Stories",
    meta: "2025 · DOCU-SERIES",
    director: "NV Originals",
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&auto=format&fit=crop",
    tag: "ORIGINAL",
  },
];

export default function Shows() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#b89a6a]" />
              <span className="text-[11px] tracking-[0.4em] text-[#b89a6a] font-light uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="font-[Cormorant_Garamond] text-6xl md:text-8xl font-light leading-none tracking-tight text-[#f0ece4]">
              Productions.
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-[11px] tracking-[0.3em] uppercase font-light text-[#f0ece4]/60 hover:text-[#f0ece4] transition"
          >
            Full Gallery →
          </a>
        </motion.div>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-10 pb-10 snap-x snap-mandatory">
        {productions.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative shrink-0 w-[300px] md:w-[380px] aspect-[3/4] overflow-hidden snap-start"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${p.img}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
            <div className="absolute inset-0 border border-transparent group-hover:border-[#b89a6a]/50 transition" />

            <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] font-light text-[#b89a6a]">
              {p.tag}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="text-[10px] tracking-[0.3em] text-[#f0ece4]/60 mb-2 uppercase">
                {p.meta}
              </div>
              <div className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light leading-tight text-[#f0ece4]">
                {p.title}
              </div>
              <div className="mt-3 font-[Cormorant_Garamond] italic text-[#f0ece4]/60">
                {p.director}
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#f0ece4]/0 group-hover:text-[#f0ece4] transition">
                VIEW CASE
                <span className="w-10 h-px bg-current" />
              </div>
            </div>
          </motion.a>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
