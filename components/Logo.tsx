import { site } from "@/lib/site";

// REPLACE WITH LOGO PNG — transparent background
// Reserved slot: 200x80. When /public/logo.png exists, swap the <svg> for:
// <Image src="/logo.png" alt={site.name} width={200} height={80} priority />
export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <span className="flex h-[48px] max-w-[200px] items-center gap-2.5 sm:h-[56px]">
      <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#1F4D47" stroke="#F2A33A" strokeOpacity=".35" strokeWidth="2" />
        <path d="M12 31 32 14l20 17" fill="none" stroke="#F2A33A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 28v22h30V28" fill="none" stroke="#FAF6EF" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="m24 46 16-16" stroke="#FAF6EF" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="34.5" y="27" width="10" height="5" rx="1.5" transform="rotate(-45 39.5 29.5)" fill="#F2A33A" />
        <path d="m40 46-16-16" stroke="#FAF6EF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="23" cy="29" r="4.2" fill="none" stroke="#F2A33A" strokeWidth="3" />
      </svg>
      <span className={`font-display text-lg font-bold uppercase leading-[0.95] tracking-wide sm:text-xl ${light ? "text-white" : "text-pine"}`}>
        Handyman
        <span className="block text-amber">Calgary NW</span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
