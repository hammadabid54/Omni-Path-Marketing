/**
 * TrajectoryChart — inline SVG area chart for case study "before → after" data.
 *
 * Server component. No JS, no library. Renders an area + line + dots + tooltip-on-last.
 * Designed for ~6-12 monthly data points. Y-axis auto-scales; X-axis labels are
 * abbreviated month names.
 */
import { cn } from "@/lib/cn";

export interface TrajectoryPoint {
  month: string; // "Jan", "Feb", ...
  value: number; // primary metric (e.g. clicks)
}

interface TrajectoryChartProps {
  data: TrajectoryPoint[];
  /** Y-axis label, e.g. "Monthly organic clicks" */
  label: string;
  /** "from → to" headline shown above the chart */
  fromValue: number;
  toValue: number;
  className?: string;
}

export function TrajectoryChart({
  data,
  label,
  fromValue,
  toValue,
  className,
}: TrajectoryChartProps) {
  if (data.length < 2) return null;

  const W = 700;
  const H = 280;
  const PAD_L = 50;
  const PAD_R = 30;
  const PAD_T = 30;
  const PAD_B = 40;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;

  const maxV = Math.max(...data.map((d) => d.value), 1);
  const minV = 0;
  // Round max up to a nice number for the Y axis
  const niceMax = niceCeil(maxV);

  const x = (i: number) =>
    PAD_L + (innerW * i) / (data.length - 1);
  const y = (v: number) =>
    PAD_T + innerH - (innerH * (v - minV)) / (niceMax - minV);

  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(d.value).toFixed(1)}`)
    .join(" ");

  const areaPath =
    linePath +
    ` L${x(data.length - 1).toFixed(1)},${(PAD_T + innerH).toFixed(1)}` +
    ` L${x(0).toFixed(1)},${(PAD_T + innerH).toFixed(1)} Z`;

  // Y-axis ticks (5 lines)
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(niceMax * t));
  const lastPoint = data[data.length - 1];

  return (
    <div className={cn("bento bento-lg", className)}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-1 text-3xl font-bold text-lime">
            {formatNumber(fromValue)} → {formatNumber(toValue)}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/45">
          <span className="inline-block h-2 w-6 rounded-sm bg-lime" /> {label.split(" ").slice(-1)[0] || "value"}
        </div>
      </div>

      <svg
        className="mt-6 w-full h-[200px] sm:h-[280px]"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Trajectory chart from ${formatNumber(fromValue)} to ${formatNumber(toValue)}`}
      >
        <defs>
          <linearGradient id="limeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A3E635" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A3E635" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y-axis grid + labels */}
        {yTicks.map((tick, i) => {
          const yPos = PAD_T + innerH - (innerH * i) / 4;
          return (
            <g key={tick}>
              <line
                className="stroke-white/5"
                x1={PAD_L}
                y1={yPos}
                x2={PAD_L + innerW}
                y2={yPos}
                strokeWidth={1}
              />
              <text
                className="fill-white/45"
                x={PAD_L - 8}
                y={yPos + 4}
                fontSize={11}
                fontFamily="JetBrains Mono, monospace"
                textAnchor="end"
              >
                {formatNumber(tick)}
              </text>
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={d.month}
            className="fill-white/45"
            x={x(i)}
            y={H - PAD_B + 22}
            fontSize={11}
            fontFamily="JetBrains Mono, monospace"
            textAnchor="middle"
          >
            {d.month}
          </text>
        ))}

        {/* Filled area */}
        <path d={areaPath} fill="url(#limeGrad)" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="#A3E635"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dots */}
        {data.map((d, i) => (
          <circle
            key={d.month}
            cx={x(i)}
            cy={y(d.value)}
            r={3.5}
            fill="#A3E635"
            stroke="#0A0A0F"
            strokeWidth={2}
          />
        ))}

        {/* Tooltip on last point */}
        {(() => {
          const lx = x(data.length - 1);
          const ly = y(lastPoint.value);
          const tw = 130;
          const th = 36;
          const tx = Math.max(PAD_L, lx - tw - 14);
          const ty = Math.max(PAD_T, ly - th - 6);
          return (
            <g transform={`translate(${tx}, ${ty})`}>
              <rect
                x={0}
                y={0}
                width={tw}
                height={th}
                rx={6}
                fill="#0A0A0F"
                stroke="#A3E635"
                strokeWidth={1}
              />
              <text
                x={10}
                y={14}
                fontSize={10}
                fill="rgba(255,255,255,0.5)"
                fontFamily="JetBrains Mono, monospace"
              >
                {data[0].month} — {lastPoint.month}
              </text>
              <text
                x={10}
                y={29}
                fontSize={12}
                fill="#A3E635"
                fontFamily="JetBrains Mono, monospace"
                fontWeight={600}
              >
                {formatNumber(lastPoint.value)} clicks
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

function niceCeil(n: number): number {
  if (n <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(n)));
  const norm = n / mag;
  let nice: number;
  if (norm <= 1) nice = 1;
  else if (norm <= 2) nice = 2;
  else if (norm <= 5) nice = 5;
  else nice = 10;
  return nice * mag;
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return n.toLocaleString();
  return String(n);
}
