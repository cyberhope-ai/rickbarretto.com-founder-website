// Press + media archive, organized by company.
// Drop new YouTube video IDs into the videos[] array for any company.
// PDFs live on Rick's desktop archive (~59 DreamAuthentics tearsheets) — wire
// individual PDF files to publicUrl when uploaded to public/press/<company>/

export type PressTier = "tier1" | "tier2" | "regional" | "tv";

export type PressItem = {
  publication: string;
  tier: PressTier;
  note?: string;
  publicUrl?: string; // link to PDF or external URL if public
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
      // Tier 1 — national / international
      { publication: "Rolling Stone Magazine", tier: "tier1" },
      { publication: "Fortune Magazine", tier: "tier1" },
      { publication: "Playboy", tier: "tier1" },
      { publication: "Billboard Magazine", tier: "tier1", note: "July 2007 — \"Thinking Outside the Jukebox\"" },
      { publication: "Electronic Gaming Monthly (EGM)", tier: "tier1", note: "Holiday 2007 — Katana feature" },
      { publication: "GamePro Magazine", tier: "tier1", note: "December 2007 — Holiday gift guide" },
      { publication: "Gizmodo", tier: "tier1", note: "April 2007 — Katana feature" },
      { publication: "CNET News", tier: "tier1", note: "March 2006 — Excalibur launch" },
      { publication: "Game Informer", tier: "tier1" },
      { publication: "E! Online", tier: "tier1" },
      { publication: "G4 TV Online", tier: "tier1" },
      { publication: "Electronic House", tier: "tier1", note: "October issue" },
      // Tier 2 — specialty gaming / tech
      { publication: "Destructoid", tier: "tier2" },
      { publication: "SlashGear", tier: "tier2" },
      { publication: "Crunch Gear", tier: "tier2" },
      { publication: "Ubergizmo", tier: "tier2" },
      { publication: "TechnaBob", tier: "tier2" },
      { publication: "The Gadgeteer", tier: "tier2" },
      { publication: "Gear Diary", tier: "tier2" },
      { publication: "Arcade Heroes", tier: "tier2" },
      { publication: "Watch Mojo", tier: "tier2" },
      { publication: "SciFi Tech", tier: "tier2" },
      { publication: "ManiaTV", tier: "tier2" },
      { publication: "Best Stuff", tier: "tier2" },
      { publication: "Popgadget", tier: "tier2" },
      { publication: "Gamer Dad / Great Dad", tier: "tier2" },
      { publication: "teamXbox", tier: "tier2" },
      { publication: "Gearlog", tier: "tier2" },
      { publication: "Crave (CNET)", tier: "tier2" },
      { publication: "I-War", tier: "tier2" },
      // Regional / lifestyle
      { publication: "Time Out New York", tier: "regional" },
      { publication: "Los Angeles Magazine", tier: "regional" },
      { publication: "San Francisco Examiner", tier: "regional" },
      { publication: "Washington Examiner", tier: "regional" },
      { publication: "Baltimore Examiner", tier: "regional" },
      { publication: "The Oklahoman", tier: "regional" },
      { publication: "Rocky Mountain News", tier: "regional" },
      { publication: "Bangkok Post", tier: "regional" },
      { publication: "Urban Male Magazine", tier: "regional" },
      { publication: "Acquire Magazine", tier: "regional" },
      { publication: "New England Fine Living", tier: "regional" },
      { publication: "Splash Magazine", tier: "regional" },
      { publication: "Luxury Villas & Resorts", tier: "regional" },
      { publication: "Angie's List", tier: "regional" },
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
