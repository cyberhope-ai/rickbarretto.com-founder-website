// Company / venture data for the Career timeline.
// Sourced from Rick's Complete Innovation Timeline (April 2026).
// Add photos to public/companies/<id>/ and they'll auto-wire via images[].

export type Market = "B2B" | "B2C" | "B2G" | "Nonprofit" | "B2B2C";

export type Company = {
  id: string;
  name: string;
  tagline: string;
  yearStart: number;
  yearEnd: number | "present";
  firstInCategory?: string;
  status: "active" | "acquired" | "historical" | "milestone";
  description: string;
  highlights: {
    customers?: string[];
    products?: string[];
    pricePoint?: string;
    markets?: Market[];
    notable?: string[];
  };
  logo?: string;
  images?: string[];
  moreImagesUrl?: string;
  websiteUrl?: string;
  exitNote?: string;
};

export const companies: Company[] = [
  {
    id: "wsi-multimedia",
    logo: "/companies/wsi-multimedia/logo.png",
    name: "WSI Multimedia",
    tagline: "Broadcast, film, 3D animation, and streaming integrations for the Midwest",
    yearStart: 1999,
    yearEnd: 2004,
    status: "historical",
    description:
      "Rick founded WSI Multimedia as a new division of the family business Word Systems, Inc. He designed the most complex SGI + Discreet + Matrox + Avid + Alias Wavefront integrations in TV, broadcast, film, video game, and streaming-media workflows. Regional focus across IN/IL/MI/OH/KY plus national distribution through the IBM Intellistations.com partnership.",
    highlights: {
      customers: [
        "Professional video post-production houses",
        "TV broadcast + cable affiliates",
        "Video game developers — Sunstorm Interactive (Deer Hunter)",
        "Corporate video production + training",
        "Medical, hospitals, banks, Fortune 500, universities",
      ],
      products: [
        "3D animation systems (Discreet 3dsMAX R4, Alias Wavefront, NewTek Lightwave)",
        "Non-linear video editing (Discreet Edit / Combustion / Fire / Smoke, Premiere, Final Cut Pro, Speed Razor)",
        "Streaming media creation + delivery (RealNetworks, Pinnacle Stream Genie / Stream Factory)",
        "Real-time 2-way video conferencing (MPEG-2 DVD quality over IP)",
        "DVD/CD authoring (Apple, Pioneer, Sonic Solutions)",
        "Real-time motion capture + animation (Kaydara)",
        "Intellistations.com — national e-commerce with IBM",
      ],
      pricePoint: "Enterprise workstations $25K–$250K integrated systems",
      markets: ["B2B"],
      notable: [
        "Partners: IBM, Apple, SONY, Avid, Matrox, Discreet (Autodesk), Pinnacle, Rorke, Alias Wavefront, SGI",
        "Founded + ran the Indianapolis 3D User Group — 50+ members, 4+ years, met at Barretto Technology Center",
        "StreamingMedia2001.com live webcast seminar — 200 attending + 50 on Internet, covered by IBJ + Star + WIBC",
        "Helped Sunstorm Interactive turn Deer Hunter into one of the highest-grossing games of its era",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/dreamauthentics",
    exitNote: "WSI (parent company) ultimately acquired by Valsoft Corporation (2025) alongside iRecord — ~$20M combined.",
  },

  {
    id: "dreamauthentics",
    logo: "/companies/dreamauthentics/logo.png",
    name: "DreamAuthentics",
    tagline: "The world's first multi-game personal arcade — still running, 25 years",
    yearStart: 2000,
    yearEnd: "present",
    firstInCategory: "First PC-based multi-game home arcade cabinet",
    status: "active",
    description:
      "Rick collected and restored classic arcades as a hobby, ran out of basement space, and invented the solution: put hundreds of games on one cabinet. DreamAuthentics created a new category inside the $90B video game industry — custom PC-based arcade consoles with licensed emulation — and placed cabinets in celebrity homes, the Playboy Mansion, and on the Video Games Live concert tour in front of 20,000+ audiences. Twenty-five years in and still making arcades.",
    highlights: {
      customers: [
        "Gloria Estefan",
        "Reggie Wayne (Indianapolis Colts)",
        "Kevin Harvick (NASCAR)",
        "NVIDIA, Blizzard, SONY, PlayStation, Microsoft, Valve/Steam",
        "High-net-worth individuals nationwide",
        "Luxury rental properties worldwide",
      ],
      products: [
        "Katana — tabletop arcade, 200+ licensed games, 70 lbs",
        "Excalibur — full two-player cabinet, 5,000+ games",
        "Online configurator — custom marquee, light guns, trackball",
        "Xbox 360 / PlayStation connectivity, DVD, jukebox",
      ],
      pricePoint: "Katana $2,000–$2,500 · Excalibur $3,495+",
      markets: ["B2C", "B2B"],
      notable: [
        "Featured in Billboard, EGM, GamePro, Gizmodo, CNET, Rolling Stone, Fortune, Playboy",
        "National TV: NBC, CBS, Fox, E!, HGTV, The Today Show",
        "Video Games Live concert tour partner (2006–2010)",
        "First interactive on-stage video game competition at a live concert",
        "At the Playboy Mansion with Hugh Hefner, The Girls Next Door, Ludacris",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/dreamauthentics",
  },

  {
    id: "irecord",
    name: "iRecord",
    tagline: "Digital recording for law enforcement interviews",
    yearStart: 2002,
    yearEnd: 2025,
    firstInCategory: "First digital law enforcement interview/interrogation recording system",
    status: "acquired",
    description:
      "\"Nobody believed in it except mom and dad — they took a second mortgage to fund it.\" iRecord created and defined the secure-video-recording market for police interviews and interrogations, solving chain-of-custody and evidence-integrity problems for departments nationwide. The product that nobody believed in became the product that sold the family business.",
    highlights: {
      customers: [
        "State and local police departments (US)",
        "County prosecutors",
        "Federal law enforcement agencies",
      ],
      products: [
        "iRecord interview/interrogation recorders (hardware + software)",
        "Chain-of-custody evidence management",
        "Secure cloud + on-prem retention",
      ],
      pricePoint: "Enterprise B2B SaaS + hardware — agency-tier licensing",
      markets: ["B2G", "B2B"],
      notable: [
        "Part of the $25B law enforcement technology industry",
        "Met federal and state mandatory-recording laws (started when Obama was an IL senator)",
        "As of 2016, over half of US states had mandatory recording laws",
        "20+ years of keeping children and communities safe",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/irecord",
    exitNote:
      "Acquired by Valsoft Corporation (2025) alongside WSI — ~$20M combined. Funded the phoenix of CyberHope AI.",
  },

  {
    id: "harry-potter-wall-art",
    logo: "/companies/harry-potter-wall-art/logo.png",
    name: "Harry Potter Wall Art",
    tagline: "Warner Bros.–licensed repositionable wall art",
    yearStart: 2005,
    yearEnd: 2012,
    firstInCategory: "First licensed Harry Potter repositionable wall art",
    status: "historical",
    description:
      "Under DreamTrust Corporation, secured the exclusive Warner Bros. license for Harry Potter repositionable wall art and built a complete web-to-print consumer platform — one of the earliest of its kind. Customers browsed 600+ licensed images, designed any-size collages online, and orders went directly to the integrated print shop.",
    highlights: {
      customers: ["Harry Potter fans worldwide", "Borders, Barnes & Noble, Target (national retail)"],
      products: [
        "4x retail packages of repositionable wall decals",
        "Interactive web design-to-print platform",
        "Life-size to entire-wall custom prints",
        "All four Hogwarts houses, characters, Quibbler designs",
      ],
      pricePoint: "Retail $25–$250 · Custom wall prints up to $1,000+",
      markets: ["B2C", "B2B"],
      notable: [
        "Only company in Indiana with a Warner Bros. Harry Potter license",
        "Keynote vendor at Infinitus 2010 (major HP fan convention)",
        "Indianapolis Star feature (Aug 2009)",
        "Tagline: Entertain. Educate. Inspire.",
      ],
    },
  },

  {
    id: "tln",
    logo: "/companies/tln/logo.png",
    name: "The LAN Network (TLN)",
    tagline: "The first dedicated esports training house",
    yearStart: 2012,
    yearEnd: "present",
    firstInCategory: "First dedicated esports team bootcamp house",
    status: "active",
    description:
      "Rick and Cara Barretto acquired TLN from founder Joe \"Mr. P\" Pennacchio when the original Halo-era operation wound down. TLN pioneered the \"team bootcamp house\" model — now standard across League of Legends, Dota, Call of Duty, and Halo. Tyler \"Ninja\" Blevins lived with Rick and Cara for weeks right before Fortnite made him the world's most famous streamer.",
    highlights: {
      customers: [
        "Professional esports teams (Instinct, Final Boss, Str8 Rippin, Dynasty, Triggers Down, Carbon)",
        "Emerging collegiate and scholastic programs",
        "Corporate clients for cybersecurity / team-building",
      ],
      products: [
        "Esports athlete bootcamp + training",
        "Live-streamed scrimmages and exclusive fan content",
        "Cybersecurity, data protection, custom retro arcades",
        "SOC-as-a-Service (2024+)",
      ],
      pricePoint: "Team-tier monthly + custom enterprise contracts",
      markets: ["B2B", "B2C"],
      notable: [
        "Notable alumni: Ninja, Tom \"Tsquared\" Taylor, Michael \"StrongSide\" Cavanaugh",
        "Pioneered the \"bootcamp house\" model now standard in pro esports",
        "2024–2025: 24/7 state-of-the-art training center under construction in Indianapolis",
        "40+ gaming stations, tournament stage, broadcast studio",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/dreamauthentics",
  },

  {
    id: "video-game-palooza",
    logo: "/companies/video-game-palooza/logo.png",
    name: "Video Game Palooza",
    tagline: "501(c)(3) — gaming as a vehicle for STEM education",
    yearStart: 2013,
    yearEnd: "present",
    status: "active",
    description:
      "Created by Rick and Cara as one of the world's first charity foundations focused on educating the next-generation workforce using STEM + video game theory. Pioneered the \"Charity Arcade\" concept, ran Create-and-Play coding camps for six consecutive years, expanded into Indianapolis Public Schools, and hosts the annual \"Reboot\" Video Game Awards with $10K grants.",
    highlights: {
      customers: [
        "Youth ages 6–16 (summer camps)",
        "Inner-city schools and IPS",
        "Indie game developers (Midwest)",
      ],
      products: [
        "Create and Play Camps (6+ years running)",
        "Reboot Video Game Awards ($10K grants)",
        "Roblox game development curriculum for IPS",
        "Charity Arcade fundraising events",
      ],
      pricePoint: "Free to participants · donor / grant funded",
      markets: ["Nonprofit"],
      notable: [
        "videogamepalooza.org — published \"10 Things You Need to Know When Designing Your Ultimate Custom Video Arcade\" (2015)",
        "Parent organization for Hope Training Academy",
        "Online communities with millions of users across retro arcade, emulation, esports broadcasting",
      ],
    },
    websiteUrl: "https://videogamepalooza.org/video-game-camps/",
  },

  {
    id: "game-on-events",
    logo: "/companies/game-on-events/logo.png",
    name: "Game On Events",
    tagline: "Indiana's first 80-station esports center",
    yearStart: 2017,
    yearEnd: 2020,
    firstInCategory: "First 80-station esports center and training facility (Indiana)",
    status: "historical",
    description:
      "Launched at Grand Park Sports Campus in partnership with the City of Westfield. Eighty high-speed gaming stations, league hosting, corporate event facilities, and educational outreach to Indiana universities. Front-page cover of the Indianapolis Business Journal (Dec 4–10, 2017): \"Esports Explode.\"",
    highlights: {
      customers: [
        "Indiana University (IUPUI) — 2-year tournament partnership",
        "Butler University, Ball State, Trine University",
        "Corporate fundraisers and educational coding events",
        "Local high schools and colleges",
      ],
      products: [
        "80 state-of-the-art gaming stations",
        "Leagues (League of Legends, Overwatch)",
        "Open play + memberships",
        "Corporate event hosting",
      ],
      pricePoint: "Member day-pass to enterprise event packages",
      markets: ["B2B", "B2C", "B2B2C"],
      notable: [
        "IBJ cover story (Dec 2017): \"Esports Explode\"",
        "Partnership with the City of Westfield and Grand Park",
        "Rick Barretto — Chief Visionary Officer",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/gameon",
  },

  {
    id: "hope-training-academy",
    logo: "/companies/hope-training-academy/logo.png",
    name: "Hope Training Academy",
    tagline: "Free IT + cybersecurity training for underserved Hoosiers",
    yearStart: 2018,
    yearEnd: "present",
    firstInCategory: "First gaming-to-cybersecurity workforce pipeline",
    status: "active",
    description:
      "Operates under Video Game Palooza 501(c)(3). CompTIA Education Partner. Nearly 2,000 Hoosiers trained in IT and cybersecurity — not one student has ever paid tuition. Funded by grants, state/local programs, and when that wasn't enough, Rick and Cara's own life savings and Cara's trust from her mother.",
    highlights: {
      customers: [
        "Underserved, homeless, and underrepresented communities",
        "Spanish speakers (English-language tech courses)",
        "Veterans, incumbent workers, persons of color, low-income",
      ],
      products: [
        "CompTIA A+ / Network+ / Security+ / Server+ / Cloud+ / Linux+",
        "Microsoft Office Specialist, QuickBooks Pro",
        "Working cybersecurity lab with real server infrastructure",
        "Apprenticeship with Martin University",
      ],
      pricePoint: "Free to every student, always",
      markets: ["Nonprofit"],
      notable: [
        "Three campus locations: Lafayette Square Mall, Shepherd Community Center, Martin University",
        "CompTIA Education Partner",
        "Continued operating through COVID-19",
        "Intentionally located on IndyGo bus routes in underserved areas",
        "~2,000 trained. $0 tuition. Ever.",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/hopetrainingacademy",
  },

  {
    id: "vg-hall-of-fame",
    name: "Video Game Hall of Fame",
    tagline: "Inducted — International Video Game Hall of Fame",
    yearStart: 2019,
    yearEnd: 2019,
    status: "milestone",
    description:
      "Inducted by industry legends Billy Mitchell (King of Kong, Donkey Kong world champion) and Walter Day (Twin Galaxies founder, pioneer of the video game referee). Recognition for 20+ years of innovation across DreamAuthentics, TLN, Game On Events, and Video Game Palooza. Both Mitchell and Day became personal friends who have stayed at Rick's house for multiple days.",
    highlights: {
      notable: [
        "Inducted 2019 — while practically nobody in Indiana understood what Rick was building",
        "Billy Mitchell and Walter Day — personal friends",
        "Recognition for hardware innovation, esports infrastructure, and gaming-as-education",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/vghalloffame",
  },

  {
    id: "cyberhope-ai",
    name: "CyberHope AI",
    tagline: "PrecognitionOS — an operating system for governed AI",
    yearStart: 2025,
    yearEnd: "present",
    firstInCategory:
      "First 11-layer AI governance OS (PCOS) + first multi-model AI family (Claude/GPT/Gemini/Grok cooperating)",
    status: "active",
    description:
      "After the family business sold, the inheritance situation, the $200M acquisition killed by ego, and being forced out — Rick sold his remaining shares and bet everything on one more dream. He became an NVIDIA Developer, studied the AI/ML/Quantum stack from scratch, and in roughly six months authored more than 100 AI repositories. The result: PrecognitionOS, the first multi-layer governance operating system for AI, with ~20 provisional patents integrated into the live running fabric.",
    highlights: {
      customers: [
        "Enterprise AI governance (target: regulated industries)",
        "Institutional AI buyers seeking trust + auditability",
        "Community nodes (libraries, schools, churches)",
      ],
      products: [
        "PrecognitionOS — 11-layer governance OS (L0–L10)",
        "SkillDNA — TCP/IP for people (cognitive profiling)",
        "Helix Swarm Fabric — P2P AI compute, \"Airbnb of GPUs\"",
        "Helix Chat — decentralized ChatGPT alt ($2/mo)",
        "QMesh — governed mesh networking",
      ],
      pricePoint: "B2B enterprise + $2/mo consumer Helix Chat",
      markets: ["B2B", "B2C", "B2B2C"],
      notable: [
        "FIRST on the planet to have Claude + GPT + Gemini + Grok cooperating inside one governance system",
        "~18 Invention Disclosure Reports drafted (PCOS, QSurface, TRON, SkillDNA, QMesh, Helix Swarm, Galaxy Model)",
        "Live fleet: 32 GPUs, 11+ agents, HP Moonshot cluster",
        "Target market: $162.5B decentralized AI compute (projected 2034)",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/cyberhopeai",
  },

  {
    id: "tornado-spinner",
    logo: "/companies/tornado-spinner/logo.png",
    name: "Tornado Spinner",
    tagline: "The world's most popular retro arcade emulation spinner",
    yearStart: 2005,
    yearEnd: "present",
    status: "active",
    description:
      "A specialized arcade control device engineered for authentic retro-arcade emulation. Twenty years in market and still the number-one design for enthusiasts building custom cabinets. Sold globally direct to the emulation and home-arcade community.",
    highlights: {
      customers: ["Home-arcade builders worldwide", "Emulation and retro-gaming community", "DreamAuthentics cabinet customers"],
      products: ["Tornado Spinner (rotary arcade control)", "Integrated cabinet parts for custom builds"],
      pricePoint: "Direct-to-consumer $49–$149",
      markets: ["B2C", "B2B"],
      notable: [
        "20+ years continuous product line",
        "\"Number one most popular design for retro arcade/emulation spinners\"",
        "Dedicated site: tornadospinner.com",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/tornadospinner",
  },

  {
    id: "game-on-publishing",
    logo: "/companies/game-on-publishing/logo.png",
    name: "Game On Publishing",
    tagline: "Rick's book on custom retro arcade systems",
    yearStart: 2015,
    yearEnd: "present",
    status: "active",
    description:
      "Rick authored \"Game On! — The Ten Things You Need to Know When Designing Your Ultimate Custom Video Arcade,\" published through Amazon Publishing. A decision-making guide for anyone commissioning or buying a custom retro arcade system — distilled from two decades of hands-on builds.",
    highlights: {
      products: ["\"Game On!\" — decision-making guide (Amazon Publishing)", "Industry expertise documentation"],
      markets: ["B2C", "B2B"],
      notable: [
        "Authored by Rick Barretto",
        "Amazon Publishing distribution",
        "Reference text for arcade enthusiasts and professionals",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/gameonpublishing",
  },

  {
    id: "jolt-video-live",
    logo: "/companies/jolt-video-live/logo.png",
    name: "Jolt Video Live",
    tagline: "Realtime video platform — 5 applications built on it",
    yearStart: 2020,
    yearEnd: "present",
    status: "active",
    description:
      "A modular realtime video + conferencing platform that Rick engineered as a single underlying stack, then used to create and launch five distinct applications across law enforcement, education, virtual meetings, esports performance training, and world-record verification. Jolt is the platform; the applications are the products people actually interact with.",
    highlights: {
      customers: [
        "Law enforcement agencies (iRecord LiveView)",
        "Educational institutions (HopeVideo)",
        "Enterprise meeting hosts (JVL Meetings)",
        "Professional esports teams (Neurotrack Brain Training)",
        "Esports record authorities (Esports World Records Live)",
      ],
      products: [
        "iRecord LiveView — realtime SECURE law enforcement interview platform (created + invented)",
        "HopeVideo — realtime video conferencing for education (created + invented)",
        "JVL Meetings — realtime virtual meetings + streaming platform (created + invented)",
        "Neurotrack Brain Training — realtime video API for competitive esports reaction-time training (created + invented)",
        "Esports World Records Live — realtime video game esports world-record verification platform (created + invented)",
      ],
      markets: ["B2B", "B2G", "B2C", "B2B2C"],
      notable: [
        "One realtime video platform, 5 invented applications spanning 4 different industries",
        "Realtime SECURE channel model used across law enforcement, education, and esports verification",
        "Demonstrates the core Rick pattern: build the platform, invent the uses",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/joltvideolive",
  },

  {
    id: "sci-fi-life",
    logo: "/companies/sci-fi-life/logo.png",
    name: "Sci-Fi Life",
    tagline: "Roblox-native educational game for coding + game programming",
    yearStart: 2023,
    yearEnd: "present",
    status: "active",
    description:
      "An interactive educational game built for VR and Roblox that teaches coding and game programming through immersive 3D gameplay. Playable publicly on Roblox or licensable as a private server / LAN version for schools and organizations — a next-generation platform for technical education at scale.",
    highlights: {
      customers: ["Roblox players (public platform)", "Schools + educational institutions (private/LAN licensing)"],
      products: ["Sci-Fi Life game on Roblox", "Private server / LAN licensing", "Coding + game-programming curriculum"],
      markets: ["B2C", "B2B", "Nonprofit"],
      notable: [
        "Playable on Roblox's massive user base",
        "Licensable for private school deployments",
        "Rich 3D sci-fi learning world",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/roblox",
  },

  {
    id: "ai-vr-metaverse",
    logo: "/companies/ai-vr-metaverse/logo.png",
    name: "AI / VR Metaverse Labs",
    tagline: "XR training and immersive learning",
    yearStart: 2022,
    yearEnd: "present",
    status: "active",
    description:
      "XR (AR/VR/MR) training content and gaming products focused on skill development and employment pathways. Partners with Indiana University on training-content development, bridging cutting-edge extended reality with practical workforce-development applications.",
    highlights: {
      customers: ["Indiana University (XR training content partner)", "Hope Training Academy", "Corporate training clients"],
      products: ["XR training content (AR/VR/MR)", "Educational gaming products", "Immersive learning solutions", "Real-Money Ludo game"],
      markets: ["B2B", "B2C", "Nonprofit"],
      notable: [
        "Indiana University XR training partnership",
        "Integrated with Hope Training Academy workforce pipeline",
        "Part of Arcade Inventors portfolio",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/aivrmetaverse",
  },
];

// Key highlights aggregated for the summary cards at the top.
export const keyHighlights = {
  companies: "22+",
  firstInCategory: 8,
  patentsDrafted: "~20",
  yearsBuilding: "35+",
  acquisitions: 2,
  acquisitionValue: "~$20M",
  studentsTrained: "~2,000",
  hallOfFameYear: 2019,
};
