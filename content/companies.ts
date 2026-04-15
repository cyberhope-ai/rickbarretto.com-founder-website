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
    name: "WSI Multimedia",
    tagline: "Broadcast, film, and SGI systems for the Midwest",
    yearStart: 1998,
    yearEnd: 2025,
    status: "acquired",
    description:
      "Founded as a new division of the family business Word Systems, Inc. (est. 1970s). Within a few years, WSI Multimedia grew to nearly half of the parent company's revenues — delivering 3D animation, motion capture, film post-production, and video game workflow solutions to an under-served market. Acquired by Valsoft Corporation in 2025.",
    highlights: {
      customers: [
        "Sunstorm Interactive (Deer Hunter franchise)",
        "TV and broadcast production companies",
        "Film post-production studios",
        "National video game studios",
      ],
      products: [
        "Most complex and powerful SGI systems in TV, broadcast, film",
        "Discreet Edit / Flame / Inferno / Combustion integrations",
        "Alias Wavefront 3D character motion-capture workflows",
        "Intellistations.com — national e-commerce with IBM",
      ],
      pricePoint: "Enterprise workstations, $25K–$250K integrated systems",
      markets: ["B2B"],
      notable: [
        "IBM partnership: Intellistations.com",
        "Partners: IBM, Apple, SONY, Avid, Autodesk, SGI, Intergraph",
        "Helped turn Deer Hunter into one of the highest-grossing games of its era",
      ],
    },
    websiteUrl: "https://www.arcadeinventors.com/dreamauthentics",
    exitNote: "Acquired by Valsoft Corporation (2025) alongside iRecord — ~$20M combined.",
  },

  {
    id: "dreamauthentics",
    logo: "/companies/dreamauthentics/logo.png",
    name: "DreamAuthentics",
    tagline: "The world's first multi-game personal arcade",
    yearStart: 2000,
    yearEnd: 2012,
    firstInCategory: "First PC-based multi-game home arcade cabinet",
    status: "historical",
    description:
      "Rick collected and restored classic arcades as a hobby, ran out of basement space, and invented the solution: put hundreds of games on one cabinet. DreamAuthentics created a new category inside the $90B video game industry — custom PC-based arcade consoles with licensed emulation — and placed cabinets in celebrity homes, the Playboy Mansion, and on the Video Games Live concert tour in front of 20,000+ audiences.",
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
