import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Handyman Calgary NW | Handyman & Drywall Repair Calgary";
const description =
  "Owner-operated NW Calgary handyman. Drywall & ceiling repair, carpentry, painting, decks, installs & repairs. Free estimates. Call 403-891-6380.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "handyman Calgary",
    "handyman NW Calgary",
    "drywall repair Calgary",
    "popcorn ceiling repair Calgary",
    "deck builder Calgary",
    "commercial handyman Calgary",
    "aging in place Calgary",
    "furniture assembly Calgary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title,
    description,
    // Reuses the hero photo (per brief). Ideal size 1200x630.
    images: [{ url: "/images/hero-home-interior.jpg", width: 1200, height: 630, alt: "Handyman Calgary NW" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero-home-interior.jpg"] },
};

export const viewport: Viewport = { themeColor: "#1F4D47" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
