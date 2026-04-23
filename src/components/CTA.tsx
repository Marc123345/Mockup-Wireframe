import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/80 to-[#0b0b0a]/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-[#c8a86a]" />
          <span className="text-[11px] tracking-[0.4em] text-[#c8a86a] font-light uppercase">
            Start a Production
          </span>
        </div>

        <h2 className="font-[Cormorant_Garamond] text-6xl md:text-[9rem] font-light leading-[0.95] tracking-tight max-w-6xl text-[#ebe4d4]">
          Let's make
          <br />
          <span className="italic text-[#c8a86a]">something</span>
          <br />
          together.
        </h2>

        <div className="mt-20 grid lg:grid-cols-[2fr_1fr] gap-16">
          <form className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="text-[10px] tracking-[0.3em] text-[#c8a86a]/80 uppercase font-light block mb-2">
                Name *
              </label>
              <input
                className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition"
                placeholder="Jane Director"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-[#c8a86a]/80 uppercase font-light block mb-2">
                Email *
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition"
                placeholder="hello@production.com"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-[#c8a86a]/80 uppercase font-light block mb-2">
                Production Type
              </label>
              <select className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] focus:outline-none focus:border-[#c8a86a] transition">
                <option className="bg-[#0b0b0a]">Feature Film</option>
                <option className="bg-[#0b0b0a]">Television</option>
                <option className="bg-[#0b0b0a]">Commercial</option>
                <option className="bg-[#0b0b0a]">Documentary</option>
                <option className="bg-[#0b0b0a]">Music Video</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] tracking-[0.3em] text-[#c8a86a]/80 uppercase font-light block mb-2">
                Tell us about the project
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-[#ebe4d4]/20 py-3 text-[#ebe4d4] placeholder:text-[#ebe4d4]/30 focus:outline-none focus:border-[#c8a86a] transition resize-none"
                placeholder="Concept, dates, scope..."
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 justify-self-start mt-4 inline-flex items-center gap-4 bg-[#ebe4d4] text-[#0b0b0a] px-10 py-5 text-[11px] font-medium tracking-[0.3em] uppercase hover:bg-[#c8a86a] transition"
            >
              Send Inquiry
              <span className="w-8 h-px bg-[#0b0b0a]" />
            </button>
          </form>

          <div className="space-y-10 font-light">
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">
                Studio · South Africa
              </div>
              <div className="text-[#ebe4d4]/80 leading-relaxed">
                Lourensford Estate
                <br />
                Somerset West, Cape Town
                <br />
                South Africa
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">
                Production · Global
              </div>
              <div className="text-[#ebe4d4]/80 leading-relaxed">
                hello@nv-films.com
                <br />
                +27 21 000 0000
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase mb-3">
                Follow
              </div>
              <div className="flex gap-5 text-[#ebe4d4]/80 text-sm">
                <a href="#" className="hover:text-[#c8a86a] transition">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#c8a86a] transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-[#c8a86a] transition">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
