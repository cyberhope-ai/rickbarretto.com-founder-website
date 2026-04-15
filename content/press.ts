// Press + media archive, organized by company.
// Drop new YouTube video IDs into the videos[] array for any company.
// PDFs live on Rick's desktop archive (~59 DreamAuthentics tearsheets) — wire
// individual PDF files to publicUrl when uploaded to public/press/<company>/

export type PressTier = "tier1" | "tier2" | "regional" | "tv";

export type PressItem = {
  publication: string;
  tier: PressTier;
  note?: string;
  pdfUrl?: string; // link to local PDF in /public/press/<company>/
  publicUrl?: string; // external URL if public
};

export type PressVideo = {
  videoId: string; // 11-char YouTube ID
  title: string;
  subtitle?: string;
};

export type PressSection = {
  companyId: string; // matches content/companies.ts id
  company: string;
  summary: string;
  press: PressItem[];
  videos: PressVideo[];
};

export const pressSections: PressSection[] = [
  {
    companyId: "dreamauthentics",
    company: "DreamAuthentics",
    summary:
      "DreamAuthentics secured 50+ press features across national television, major print, and specialty gaming press between 2005 and 2012 — one of the most comprehensively covered arcade-hardware launches of the era. A dedicated PR firm supported the rollout; archive below is a representative slice.",
    press: [
      // Tier 1 — big national names (PDFs wired where Rick has tearsheets)
      { publication: "Rolling Stone Magazine", tier: "tier1" },
      { publication: "Fortune Magazine", tier: "tier1" },
      { publication: "Playboy", tier: "tier1" },
      { publication: "Billboard", tier: "tier1", pdfUrl: "/press/dreamauthentics/billboard.pdf", note: "July 2007 — Thinking Outside the Jukebox" },
      { publication: "Billboard (cont.)", tier: "tier1", pdfUrl: "/press/dreamauthentics/billboard2.pdf" },
      { publication: "Electronic Gaming Monthly", tier: "tier1", pdfUrl: "/press/dreamauthentics/electronic-gaming-monthly.pdf", note: "Holiday 2007 — Katana feature" },
      { publication: "GamePro", tier: "tier1", pdfUrl: "/press/dreamauthentics/gamepro-november-2007.pdf", note: "November 2007 — Holiday gift guide" },
      { publication: "Gizmodo", tier: "tier1", pdfUrl: "/press/dreamauthentics/da-in-gizmodo2.pdf", note: "April 2007 — Katana feature" },
      { publication: "CNET News", tier: "tier1", pdfUrl: "/press/dreamauthentics/bringing-real-arcade-games-home-news-blog-cnet-news.pdf", note: "March 2006 — Excalibur launch" },
      { publication: "Game Informer", tier: "tier1", pdfUrl: "/press/dreamauthentics/game-informer.pdf" },
      { publication: "E! Online", tier: "tier1", pdfUrl: "/press/dreamauthentics/e-online.pdf" },
      { publication: "G4 Online", tier: "tier1", pdfUrl: "/press/dreamauthentics/g4-online.pdf" },
      { publication: "Electronic House", tier: "tier1", pdfUrl: "/press/dreamauthentics/electronic-house-october-issue.pdf", note: "October issue" },
      { publication: "Art & HDTV", tier: "tier1", pdfUrl: "/press/dreamauthentics/art-hdtv-12-2005.pdf", note: "December 2005" },

      // Tier 2 — specialty gaming / tech
      { publication: "Destructoid", tier: "tier2", pdfUrl: "/press/dreamauthentics/destructoid.pdf" },
      { publication: "SlashGear", tier: "tier2", pdfUrl: "/press/dreamauthentics/slash-gear.pdf" },
      { publication: "Crunch Gear", tier: "tier2", pdfUrl: "/press/dreamauthentics/crunch-gear.pdf" },
      { publication: "Ubergizmo", tier: "tier2", pdfUrl: "/press/dreamauthentics/ubergizmo.pdf" },
      { publication: "TechnaBob", tier: "tier2", pdfUrl: "/press/dreamauthentics/technabob.pdf" },
      { publication: "The Gadgeteer", tier: "tier2", pdfUrl: "/press/dreamauthentics/the-gadgeteer.pdf" },
      { publication: "Gear Diary", tier: "tier2", pdfUrl: "/press/dreamauthentics/gear-diary.pdf" },
      { publication: "Arcade Heroes", tier: "tier2", pdfUrl: "/press/dreamauthentics/arcade-heroes.pdf" },
      { publication: "Watch Mojo", tier: "tier2", pdfUrl: "/press/dreamauthentics/watch-mojo.pdf" },
      { publication: "SciFi Tech", tier: "tier2", pdfUrl: "/press/dreamauthentics/da-in-sci-fi-tech.pdf" },
      { publication: "ManiaTV", tier: "tier2", pdfUrl: "/press/dreamauthentics/maniatv.pdf" },
      { publication: "Best Stuff", tier: "tier2", pdfUrl: "/press/dreamauthentics/best-stuff.pdf" },
      { publication: "Best Stuff (cont.)", tier: "tier2", pdfUrl: "/press/dreamauthentics/best-stuff2.pdf" },
      { publication: "Popgadget", tier: "tier2", pdfUrl: "/press/dreamauthentics/popgadget.pdf" },
      { publication: "Gamer Dad", tier: "tier2", pdfUrl: "/press/dreamauthentics/gamer-dad.pdf" },
      { publication: "Great Dad", tier: "tier2", pdfUrl: "/press/dreamauthentics/great-dad.pdf" },
      { publication: "teamXbox", tier: "tier2", pdfUrl: "/press/dreamauthentics/teamxbox.pdf" },
      { publication: "Gearlog", tier: "tier2", pdfUrl: "/press/dreamauthentics/gearlog-search-results-for-dreamauthentics.pdf" },
      { publication: "Crave", tier: "tier2", pdfUrl: "/press/dreamauthentics/crave.pdf" },
      { publication: "Crave (cont.)", tier: "tier2", pdfUrl: "/press/dreamauthentics/crave2.pdf" },
      { publication: "I-War", tier: "tier2", pdfUrl: "/press/dreamauthentics/i-war.pdf" },
      { publication: "Game Room Gear", tier: "tier2", pdfUrl: "/press/dreamauthentics/game-room-gear-dream-authentics-arcade-cabinets.pdf" },
      { publication: "Obsessed Arcade", tier: "tier2", pdfUrl: "/press/dreamauthentics/obsessed-arcade.pdf" },
      { publication: "Phuze", tier: "tier2", pdfUrl: "/press/dreamauthentics/phuze-05.pdf" },
      { publication: "The Adrenaline Vault", tier: "tier2", pdfUrl: "/press/dreamauthentics/the-adrenaline-vault-news.pdf" },
      { publication: "Tetsu's Thoughts", tier: "tier2", pdfUrl: "/press/dreamauthentics/tetsu-s-thoughts.pdf" },
      { publication: "geekBlue — At Home Arcade", tier: "tier2", pdfUrl: "/press/dreamauthentics/at-home-arcade-no-quarters-necessary-geekblue.pdf" },
      { publication: "Shaun Conlin / Evergeek", tier: "tier2", pdfUrl: "/press/dreamauthentics/shaunconlinevergeek.pdf" },

      // Regional / lifestyle
      { publication: "Time Out New York", tier: "regional", pdfUrl: "/press/dreamauthentics/time-out-new-york.pdf" },
      { publication: "Los Angeles Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/los-angeles-magazine.pdf" },
      { publication: "San Francisco Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/san-francisco-examiner-print.pdf" },
      { publication: "Washington Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/washington-examiner.pdf" },
      { publication: "Baltimore Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/baltimore-examiner.pdf" },
      { publication: "The Oklahoman", tier: "regional", pdfUrl: "/press/dreamauthentics/oklahoman.pdf" },
      { publication: "The Oklahoman (feature)", tier: "regional", pdfUrl: "/press/dreamauthentics/the-oklahoman-article.pdf" },
      { publication: "Rocky Mountain News", tier: "regional", pdfUrl: "/press/dreamauthentics/rocky-mountain-news-tech-telecom.pdf" },
      { publication: "Bangkok Post", tier: "regional", pdfUrl: "/press/dreamauthentics/bangkok-post.pdf" },
      { publication: "Urban Male Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/urban-male-magazine.pdf" },
      { publication: "Acquire Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/acquire-magazine.pdf" },
      { publication: "New England Fine Living", tier: "regional", pdfUrl: "/press/dreamauthentics/new-england-fine-living.pdf" },
      { publication: "Splash Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/splash-magazine.pdf" },
      { publication: "Luxury Villas & Resorts", tier: "regional", pdfUrl: "/press/dreamauthentics/luxury-villas-resorts-vacation-rentals-exclusive-resorts.pdf" },
      { publication: "Angie's List", tier: "regional", pdfUrl: "/press/dreamauthentics/angie-s-list.pdf" },
      { publication: "The Republic", tier: "regional", pdfUrl: "/press/dreamauthentics/the-republic.pdf" },
      { publication: "Live Journal", tier: "regional", pdfUrl: "/press/dreamauthentics/live-journal.pdf" },
      { publication: "DreamAuthentics Feature", tier: "regional", pdfUrl: "/press/dreamauthentics/dreamauthentics.pdf" },
      { publication: "VGL — DA Show Poster", tier: "regional", pdfUrl: "/press/dreamauthentics/vgl-da-show-poster-copy-2.pdf" },

      // TV
      { publication: "NBC", tier: "tv" },
      { publication: "CBS", tier: "tv" },
      { publication: "Fox", tier: "tv" },
      { publication: "E!", tier: "tv" },
      { publication: "HGTV", tier: "tv" },
      { publication: "The Today Show", tier: "tv" },
    ],
    videos: [
      { videoId: "OmTOXL43dw4", title: "DreamAuthentics — archive footage", subtitle: "Original source; YouTube compression is lossy — higher-resolution originals will replace this." },
    ],
  },
  {
    companyId: "video-game-palooza",
    company: "Video Game Palooza",
    summary:
      "Coverage around the Charity Arcade program, Create-and-Play Camps, and the 501(c)(3)'s community impact. Additional archive forthcoming.",
    press: [],
    videos: [],
  },
  {
    companyId: "hope-training-academy",
    company: "Hope Training Academy",
    summary:
      "Indiana-local press and U.S. Department of Labor partnership coverage around the nearly-2,000-Hoosier training program. Archive forthcoming.",
    press: [],
    videos: [],
  },
  {
    companyId: "game-on-events",
    company: "Game On esports",
    summary:
      "Indianapolis Business Journal cover story (Dec 2017 — \"Esports Explode\"), Hamilton County Reporter, and partner-university coverage.",
    press: [
      { publication: "Indianapolis Business Journal — COVER", tier: "tier1", note: "December 4–10, 2017 — Esports Explode" },
      { publication: "Hamilton County Reporter", tier: "regional", note: "Mayor Cook + Game On launch" },
    ],
    videos: [],
  },
  {
    companyId: "irecord",
    company: "iRecord",
    summary:
      "Industry and law-enforcement trade press. Deeper archive pending — web crawl TBD across LE publications and state-agency announcements.",
    press: [],
    videos: [],
  },
  {
    companyId: "harry-potter-wall-art",
    company: "Harry Potter Wall Art",
    summary:
      "Only Indiana company with a Warner Bros. Harry Potter license at the time. Press coverage centered on the Indianapolis Star and Infinitus fan conventions.",
    press: [
      { publication: "Indianapolis Star", tier: "tier1", note: "August 2009 — Warner Bros. license" },
      { publication: "Infinitus 2010 HP Convention", tier: "regional", note: "DreamTrust keynote vendor" },
    ],
    videos: [],
  },
];
