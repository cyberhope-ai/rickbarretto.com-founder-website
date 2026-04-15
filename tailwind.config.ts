import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Space Grotesk", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
