export default function ThePattern() {
  const examples = [
    {
      era: "1998 — 2000",
      platform: "SGI + Discreet + Alias Wavefront integrations",
      uses: [
        "Intellistations.com — IBM national e-commerce",
        "Sunstorm Deer Hunter 3D animation workflow",
        "WSI Multimedia — TV, film, broadcast integrations",
      ],
    },
    {
      era: "2000 — 2018",
      platform: "Video Game Industry / Arcade Technology",
      uses: [
        "DreamAuthentics — world's first custom PC multi-game arcade",
        "Tornado Spinner — #1 retro arcade spinner worldwide",
        "NVIDIA Shield Arcade / Shield+ — custom joysticks + buttons",
        "XBOX + PlayStation controller + arcade cabinet integration",
        "Game On esports — 80-station Indiana esports facility (2017)",
        "Harry Potter Wall Art — Warner Bros. licensed web-to-print",
        "Video Games Live on-stage interactive competitions",
      ],
    },
    {
      era: "2020 — Present",
      platform: "Jolt Video Live realtime video platform",
      uses: [
        "iRecord LiveView — secure law-enforcement interviews",
        "HopeVideo — education realtime conferencing",
        "JVL Meetings — enterprise virtual meetings",
        "Neurotrack — esports reaction-time API",
        "Esports World Records Live — record verification",
      ],
    },
    {
      era: "2024 — Present",
      platform: "NVIDIA AI/ML + Quantum stack (NVIDIA Developer)",
      uses: [
        "PrecognitionOS — 11-layer AI governance OS",
        "Helix Swarm Fabric — decentralized AI compute",
        "SkillDNA — cognitive profiling protocol",
        "~18 Invention Disclosure Reports, 100+ repos in 6 months",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-20 border-y border-blue-800">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
          The Pattern
        </p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4">
          Build the platform. Invent the uses.
        </h2>
        <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed mb-10 md:mb-12">
          Most founders build one product. Rick builds the underlying platform,
          then invents half a dozen companies on top of it — across industries
          that have nothing in common except that nobody else connected them.
          This pattern has repeated for 35 years.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {examples.map((e, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-blue-700/30 rounded-xl p-5 md:p-6 hover:bg-white/10 transition"
            >
              <p className="text-xs tracking-widest uppercase text-sky-300 mb-1">
                {e.era}
              </p>
              <p className="font-display text-xl md:text-2xl text-white leading-tight mb-4">
                {e.platform}
              </p>
              <ul className="space-y-1.5">
                {e.uses.map((u, j) => (
                  <li
                    key={j}
                    className="text-sm text-blue-100 leading-relaxed pl-4 relative"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 md:mt-12 font-display italic text-lg md:text-xl text-sky-200 text-center max-w-3xl mx-auto leading-relaxed">
          &ldquo;I never have worked a day in my life.&rdquo;
          <span className="block mt-2 text-sm text-sky-400 not-italic tracking-wide">
            — Rick
          </span>
        </p>
      </div>
    </section>
  );
}
