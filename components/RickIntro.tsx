export default function RickIntro() {
  return (
    <section className="bg-white px-6 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[5fr_7fr] gap-8 md:gap-12 items-center">
        <div>
          <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-lg ring-1 ring-slate-200">
            <img
              src="/photos/rick-sitting-desk.jpg"
              alt="Rick Barretto"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
            Meet Rick
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-slate-900 mb-6">
            Dreamer. Inventor. Founder.
          </h2>
          <div className="space-y-4 text-slate-700 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Rick Barretto grew up in Valencia, California, then spent the rest
              of his career building things in Indianapolis — &ldquo;India-No-Place
              for technology,&rdquo; as he puts it — all without outside
              investors until 2026.
            </p>
            <p>
              From medical dictation systems in 1990 to the world&rsquo;s first
              multi-game arcade in 2000 to the first governed AI operating system
              in 2025, the pattern has stayed the same: see something 5-7 years
              before anyone else, build the platform that makes it possible, and
              invent the companies that live on top of it.
            </p>
            <p className="font-display italic text-xl md:text-2xl text-blue-900 pt-2">
              &ldquo;You could probably make a movie.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
