// Branded hero background used when no hero photo is set (site.photos.hero = null).
export default function HeroGraphic() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-pine via-pine to-pine-deep">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#FAF6EF 1px, transparent 1px), linear-gradient(90deg, #FAF6EF 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <svg viewBox="0 0 64 64" className="absolute -right-24 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 opacity-[0.12] lg:block">
        <path d="M12 31 32 14l20 17" fill="none" stroke="#F2A33A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 28v22h30V28" fill="none" stroke="#FAF6EF" strokeWidth="2" strokeLinejoin="round" />
        <path d="m24 46 16-16M40 46 24 30" stroke="#FAF6EF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="23" cy="29" r="4.2" fill="none" stroke="#F2A33A" strokeWidth="1.8" />
      </svg>
      <div className="absolute inset-x-0 bottom-16 border-t-2 border-dashed border-amber/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/50 to-transparent" />
    </div>
  );
}
