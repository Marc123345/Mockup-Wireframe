interface Props {
  label?: string;
  sublabel?: string;
  fill?: boolean;
  ratio?: string;
  className?: string;
}

export default function Wireframe({
  label = "IMAGE",
  sublabel,
  fill = false,
  ratio,
  className = "",
}: Props) {
  const base =
    "relative overflow-hidden bg-[#181614] border border-[#f0ece4]/10";
  const layout = fill ? "absolute inset-0" : ratio ?? "aspect-[4/5]";

  return (
    <div className={`${base} ${layout} ${className}`}>
      {/* Diagonal cross */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="rgba(235,228,212,0.08)"
          strokeWidth="1"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="rgba(235,228,212,0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* Corner ticks */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#f0ece4]/20" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#f0ece4]/20" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#f0ece4]/20" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#f0ece4]/20" />

      {/* Center label */}
      <div className="absolute inset-0 grid place-items-center text-center px-4 pointer-events-none">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-[#f0ece4]/40 uppercase font-light">
            {label}
          </div>
          {sublabel && (
            <div className="mt-2 font-[Cormorant_Garamond] italic text-[#f0ece4]/30 text-sm">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
