import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import Link from "next/link";
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
  title: "Rick Barretto — Inventor, Founder, Platform Builder",
  description:
    "For more than three decades, Rick Barretto has built companies, platforms, and training systems across medical technology, entertainment, esports, workforce development, cybersecurity, and artificial intelligence.",
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
      <body className="bg-white text-slate-900 font-sans antialiased">
        {children}
        <footer className="border-t border-slate-200 py-8 mt-0">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4 text-xs">
              <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">CyberHope AI</a>
              <span className="text-slate-200">·</span>
              <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">PrecognitionOS</a>
              <span className="text-slate-200">·</span>
              <a href="https://thelannetwork.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">The LAN Network</a>
              <span className="text-slate-200">·</span>
              <a href="https://hopetrainingacademy.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">Hope Training Academy</a>
              <span className="text-slate-200">·</span>
              <a href="https://videogamepalooza.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">Video Game Palooza</a>
              <span className="text-slate-200">·</span>
              <a href="https://linkedin.com/in/rickbarretto" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 no-underline">LinkedIn</a>
              <span className="text-slate-200">·</span>
              <Link href="/contact" className="text-slate-400 hover:text-blue-900 no-underline">Contact</Link>
            </div>
            <p className="text-center text-xs text-slate-300">
              © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
