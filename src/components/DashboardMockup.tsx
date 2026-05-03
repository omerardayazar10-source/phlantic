/**
 * Inline SVG dashboard mockup. Replaces the placeholder image; renders crisply,
 * is themeable through brand tokens, and ships zero external requests.
 */
export function DashboardMockup() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container-lowest">
      <svg
        viewBox="0 0 1280 720"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-label="Phlantic operasyon panosu"
      >
        <defs>
          <linearGradient id="lineRed" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c11428" />
            <stop offset="1" stopColor="#e01428" />
          </linearGradient>
          <linearGradient id="areaTeal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0e9b94" stopOpacity="0.20" />
            <stop offset="1" stopColor="#0e9b94" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="areaOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f08010" stopOpacity="0.18" />
            <stop offset="1" stopColor="#f08010" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* canvas */}
        <rect width="1280" height="720" fill="#ffffff" />

        {/* sidebar */}
        <rect x="0" y="0" width="220" height="720" fill="#f3f3f3" />
        <rect x="24" y="32" width="120" height="14" rx="4" fill="#1b1b1b" />
        <rect x="24" y="80" width="172" height="36" rx="8" fill="#ffffff" />
        <rect x="40" y="92" width="100" height="12" rx="3" fill="#1b1b1b" />
        {[140, 184, 228, 272, 316, 360].map((y) => (
          <rect key={y} x="24" y={y} width="172" height="32" rx="8" fill="transparent" stroke="transparent" />
        ))}
        {[140, 184, 228, 272, 316].map((y, i) => (
          <g key={y}>
            <rect x="40" y={y + 10} width={120 - i * 10} height="10" rx="3" fill="#5d3f3d" opacity="0.6" />
          </g>
        ))}

        {/* topbar */}
        <rect x="220" y="0" width="1060" height="64" fill="#ffffff" />
        <rect x="220" y="63" width="1060" height="1" fill="#e2e2e2" />
        <rect x="252" y="22" width="220" height="20" rx="6" fill="#eeeeee" />
        <circle cx="1240" cy="32" r="14" fill="#e2e2e2" />

        {/* page title */}
        <rect x="252" y="100" width="260" height="22" rx="5" fill="#1b1b1b" />
        <rect x="252" y="132" width="380" height="12" rx="4" fill="#5d3f3d" opacity="0.6" />

        {/* KPI cards */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${252 + i * 320}, 172)`}>
            <rect width="296" height="120" rx="14" fill="#ffffff" stroke="#eeeeee" />
            <rect x="20" y="20" width="80" height="10" rx="3" fill="#5d3f3d" opacity="0.6" />
            <rect x="20" y="40" width="160" height="28" rx="5" fill="#1b1b1b" />
            <rect x="20" y="82" width="80" height="10" rx="3" fill={i === 0 ? "#e01428" : i === 1 ? "#0e9b94" : "#f08010"} />
            <circle cx="260" cy="40" r="20" fill={i === 0 ? "#e0142818" : i === 1 ? "#0e9b9418" : "#f0801020"} />
            <circle cx="260" cy="40" r="8" fill={i === 0 ? "#e01428" : i === 1 ? "#0e9b94" : "#f08010"} />
          </g>
        ))}

        {/* Big chart card */}
        <g transform="translate(252, 314)">
          <rect width="616" height="316" rx="14" fill="#ffffff" stroke="#eeeeee" />
          <rect x="24" y="24" width="180" height="14" rx="4" fill="#1b1b1b" />
          <rect x="24" y="44" width="120" height="10" rx="3" fill="#5d3f3d" opacity="0.6" />

          {/* gridlines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="40"
              x2="592"
              y1={120 + i * 50}
              y2={120 + i * 50}
              stroke="#eeeeee"
            />
          ))}

          {/* area */}
          <path
            d="M40,250 C120,200 180,170 260,180 C340,190 400,140 480,120 C540,105 580,90 592,82 L592,270 L40,270 Z"
            fill="url(#areaTeal)"
          />
          {/* line */}
          <path
            d="M40,250 C120,200 180,170 260,180 C340,190 400,140 480,120 C540,105 580,90 592,82"
            fill="none"
            stroke="url(#lineRed)"
            strokeWidth="3"
          />
          {/* dot */}
          <circle cx="480" cy="120" r="6" fill="#e01428" />
          <circle cx="480" cy="120" r="11" fill="#e01428" opacity="0.18" />
        </g>

        {/* Side card: bars */}
        <g transform="translate(892, 314)">
          <rect width="356" height="316" rx="14" fill="#ffffff" stroke="#eeeeee" />
          <rect x="24" y="24" width="160" height="14" rx="4" fill="#1b1b1b" />
          <rect x="24" y="44" width="120" height="10" rx="3" fill="#5d3f3d" opacity="0.6" />
          {[
            { y: 100, w: 280, c: "#e01428" },
            { y: 132, w: 240, c: "#0e9b94" },
            { y: 164, w: 200, c: "#f08010" },
            { y: 196, w: 160, c: "#e2e2e2" },
            { y: 228, w: 120, c: "#e2e2e2" },
            { y: 260, w: 80, c: "#e2e2e2" },
          ].map((b) => (
            <rect key={b.y} x="24" y={b.y} width={b.w} height="14" rx="4" fill={b.c} />
          ))}
        </g>

        {/* bottom mini cards */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${252 + i * 240}, 650)`}>
            <rect width="216" height="46" rx="10" fill="#ffffff" stroke="#eeeeee" />
            <rect x="16" y="16" width="100" height="10" rx="3" fill="#5d3f3d" opacity="0.5" />
            <rect x="180" y="14" width="20" height="14" rx="4" fill={["#e01428", "#0e9b94", "#f08010", "#e01428"][i]} />
          </g>
        ))}
      </svg>
    </div>
  );
}
