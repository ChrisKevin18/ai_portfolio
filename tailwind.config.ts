import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070A0F",
        panel: "#0D1117",
        card: "#11161E",
        paper: "#F5F7FA",
        muted: "#94A3B8",
        quiet: "#64748B",
        line: "rgba(255,255,255,0.08)",
        "line-bright": "rgba(255,255,255,0.16)",
        blue: "#4F8CFF",
        "blue-dark": "#2563eb",
        green: "#55D6BE",
        cyan: "#38bdf8",
        amber: "#fbbf24",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 32px 110px rgba(3,7,18,0.55)",
        "blue-glow": "0 0 35px -5px rgba(79, 140, 255, 0.25)",
        "green-glow": "0 0 35px -5px rgba(85, 214, 190, 0.25)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(79, 140, 255, 0.12), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
