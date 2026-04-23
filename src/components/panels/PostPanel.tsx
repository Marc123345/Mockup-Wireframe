import Wireframe from "../Wireframe";

const capabilities = [
  { t: "Editorial", d: "Avid Media Composer, Premiere Pro, DaVinci Resolve. Assist bays, review theatre, secure cloud review." },
  { t: "Color", d: "Dolby Vision & HDR grading suites. Reference monitors, theatrical projection, remote-grade capable." },
  { t: "Sound", d: "Dolby Atmos mix stage. Foley, ADR, final re-record, music scoring room. Atmos deliverables on site." },
  { t: "VFX · Virtual Production", d: "Real-time Unreal Engine on Stage Five. Previs, techvis, and finals pipeline under one roof." },
];

export default function PostPanel() {
  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10">
        <p className="max-w-2xl text-lg md:text-xl text-[#ebe4d4]/75 font-light leading-relaxed">
          Finish on the estate. In-house edit, color, sound, and VFX — or
          plug straight into your preferred post house. Either way, you
          sleep on site.
        </p>
        <div className="space-y-3 font-light text-sm text-[#ebe4d4]/60">
          <div className="flex justify-between border-b border-[#ebe4d4]/10 pb-3">
            <span>Deliverables</span>
            <span className="text-[#ebe4d4]">Theatrical · Streaming · Broadcast</span>
          </div>
          <div className="flex justify-between border-b border-[#ebe4d4]/10 pb-3">
            <span>Formats</span>
            <span className="text-[#ebe4d4]">4K · 8K · HDR · Dolby Vision · Atmos</span>
          </div>
          <div className="flex justify-between">
            <span>Remote</span>
            <span className="text-[#ebe4d4]">Encrypted review · Global clients</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {capabilities.map((c, i) => (
          <div key={c.t}>
            <Wireframe ratio="aspect-[5/4]" label={`${c.t.toUpperCase()} BAY`} sublabel="Suite layout · reference monitors" />
            <div className="mt-5 grid grid-cols-[auto_1fr] gap-4">
              <div className="font-[Cormorant_Garamond] italic text-[#c8a86a] text-2xl">0{i + 1}</div>
              <div>
                <div className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light text-[#ebe4d4]">{c.t}</div>
                <p className="mt-3 text-sm text-[#ebe4d4]/60 font-light leading-relaxed max-w-md">{c.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#ebe4d4]/10 pt-10 grid md:grid-cols-3 gap-6">
        {[
          { n: "4", l: "Edit Bays" },
          { n: "2", l: "Grade Suites · HDR" },
          { n: "1", l: "Atmos Mix Stage" },
        ].map((s) => (
          <div key={s.l} className="flex items-end justify-between border-b border-[#ebe4d4]/5 pb-5">
            <div className="font-[Cormorant_Garamond] text-5xl font-light text-[#ebe4d4]">{s.n}</div>
            <div className="text-[10px] tracking-[0.3em] text-[#c8a86a] uppercase font-light">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
