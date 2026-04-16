import Nav from "@/components/Nav";
import ThePattern from "@/components/ThePattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventions — Rick Barretto",
  description:
    "The pattern behind 35 years of invention: build the platform, invent the uses.",
};

export default function InventionsPage() {
  return (
    <>
      <Nav active="/inventions" />
      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[7fr_5fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
                Inventions
              </p>
              <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
                The pattern behind the portfolio.
              </h1>
              <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
                Most founders build one product. Rick builds the underlying
                platform, then invents half a dozen companies on top of it
                &mdash; across industries that have nothing in common except
                that nobody else connected them.
              </p>
            </div>
            <div className="mx-auto md:mx-0 w-full max-w-[360px] md:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/photos/rick-suit-executive.jpg"
                  alt="Rick Barretto"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <ThePattern />

        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-display text-2xl text-white mb-3">
            More invention detail coming.
          </p>
          <p className="font-sans max-w-xl mx-auto mb-8">
            Patent filings, IDRs, and the full 35-year invention log will land
            here as the site expands. For the full company timeline, see{" "}
            <a
              href="/career"
              className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
            >
              Career
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
}
