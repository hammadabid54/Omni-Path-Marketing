/**
 * Sparkline — mini inline SVG line chart for cards.
 * Server component. No axes, just a smooth-ish line with optional fill.
 */
export function Sparkline({
  values,
  width = 200,
  height = 32,
  className,
}: {
  values: number[];
  width?: number;
  height?: number;
  className?: string;
}) {
  if (values.length < 2) return null;
  const max = Math.max(...values, 1);
  const min = 0;
  const xStep = width / (values.length - 1);
  const y = (v: number) => height - ((v - min) / (max - min || 1)) * (height - 4) - 2;

  const linePath = values
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * xStep).toFixed(1)},${y(v).toFixed(1)}`)
    .join(" ");

  const areaPath =
    linePath +
    ` L${(width).toFixed(1)},${height} L0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height }}
      role="img"
      aria-hidden
    >
      <path d={areaPath} fill="rgba(163, 230, 53, 0.18)" />
      <path
        d={linePath}
        fill="none"
        stroke="#A3E635"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
