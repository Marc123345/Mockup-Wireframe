const items = [
  "RAISED BY WOLVES",
  "·",
  "WARRIOR",
  "·",
  "BLACK SAILS",
  "·",
  "HBO",
  "·",
  "NETFLIX",
  "·",
  "APPLE TV+",
  "·",
  "PARAMOUNT",
  "·",
  "STARZ",
];

export default function Marquee() {
  return (
    <section className="border-y border-[#f0ece4]/5 py-10 bg-[#0a0a0a] overflow-hidden">
      <div className="marquee-track font-[Cormorant_Garamond] italic text-3xl md:text-5xl font-light text-[#f0ece4]/30">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="shrink-0">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
