import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rick Barretto — Founder, CyberHope AI",
  description:
    "Thirty-five years of invention, from a stack of business cards in downtown Indianapolis to PrecognitionOS — the first operating system for governed artificial intelligence.",
  keywords: [
    "Rick Barretto",
    "CyberHope AI",
    "PrecognitionOS",
    "PCOS",
    "AI governance",
    "founder",
    "inventor",
  ],
  authors: [{ name: "Rick Barretto" }],
  creator: "Rick Barretto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rickbarretto.com",
    title: "Rick Barretto — Founder, CyberHope AI",
    description:
      "Thirty-five years of invention. Zero outside investors until 2026. The story of someone who was told no his entire career and built it anyway.",
    siteName: "Rick Barretto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Barretto — Founder, CyberHope AI",
    description:
      "Thirty-five years of invention. Zero outside investors until 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable}`}>
      <body className="bg-stone-50 text-stone-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
