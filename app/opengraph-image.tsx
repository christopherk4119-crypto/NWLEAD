import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: handyman & drywall repair in Calgary`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share image (used when no hero photo is set in lib/site.ts).
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#1F4D47", color: "#FAF6EF" }}>
        <div style={{ fontSize: 34, color: "#F2A33A", fontWeight: 700 }}>HANDYMAN CALGARY NW</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>Your to-do list, done right.</div>
        <div style={{ fontSize: 34, marginTop: 24, opacity: 0.9 }}>Drywall · Repairs · Carpentry · Installs — NW Calgary</div>
        <div style={{ display: "flex", marginTop: 48, borderTop: "4px dashed #F2A33A", paddingTop: 28, fontSize: 44, fontWeight: 700, color: "#F2A33A" }}>Call or text {site.phoneDisplay}</div>
      </div>
    ),
    size
  );
}
