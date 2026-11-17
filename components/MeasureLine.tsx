// SIGNATURE ELEMENT: amber dashed "measuring line" with tick marks.
export default function MeasureLine({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <div aria-hidden="true" className={`relative h-4 w-full ${className}`}>
      <div className="absolute inset-x-0 top-0 h-px border-t-2 border-dashed border-amber/80" />
      <div
        className={`absolute inset-x-0 top-0 h-4 ${animated ? "measure-shimmer" : ""}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #F2A33A 0 2px, transparent 2px 16px), repeating-linear-gradient(90deg, #F2A33A 0 2px, transparent 2px 80px)",
          backgroundSize: "160px 8px, 160px 16px",
          backgroundRepeat: "repeat-x",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
