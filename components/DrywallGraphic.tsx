// Illustration used when no drywall photo is set (site.photos.drywall = null).
export default function DrywallGraphic() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of a drywall patch being taped and smoothed with a knife" className="aspect-[4/3] w-full rounded-card shadow-lift">
      <rect width="400" height="300" fill="#EFE8DA" />
      <g stroke="#D9CFBD" strokeWidth="2"><line x1="133" y1="0" x2="133" y2="300" /><line x1="266" y1="0" x2="266" y2="300" /></g>
      {/* patch + mud */}
      <rect x="120" y="85" width="130" height="110" rx="6" fill="#FAF6EF" stroke="#C9BEA9" strokeWidth="2" strokeDasharray="6 5" />
      <path d="M100 120c40-14 120-14 170 0v70c-50 12-130 12-170 0z" fill="#FFFFFF" opacity=".75" />
      {/* tape-measure line */}
      <line x1="30" y1="250" x2="370" y2="250" stroke="#F2A33A" strokeWidth="3" strokeDasharray="10 7" />
      {Array.from({ length: 18 }).map((_, i) => (<line key={i} x1={30 + i * 20} y1="250" x2={30 + i * 20} y2={i % 5 === 0 ? 266 : 258} stroke="#F2A33A" strokeWidth="2" />))}
      {/* taping knife */}
      <g transform="rotate(-18 285 150)">
        <rect x="240" y="138" width="90" height="30" rx="3" fill="#B8C2C0" stroke="#4B5563" strokeWidth="2" />
        <rect x="318" y="146" width="18" height="14" fill="#4B5563" />
        <rect x="334" y="140" width="56" height="26" rx="8" fill="#1F4D47" />
        <circle cx="378" cy="153" r="4" fill="#F2A33A" />
      </g>
      <text x="30" y="40" fontFamily="sans-serif" fontWeight="700" fontSize="16" fill="#1F4D47">PATCH · MUD · TAPE · TEXTURE MATCH</text>
    </svg>
  );
}
