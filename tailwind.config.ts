import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      muted: "hsl(var(--muted))",
      "muted-foreground": "hsl(var(--muted-foreground))",
      border: "hsl(var(--border))",
       line: "hsl(var(--border))",
      accent: "hsl(var(--accent))",
      popover: "hsl(var(--popover))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
      serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],

  
}

export default config
