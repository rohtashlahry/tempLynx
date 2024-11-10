import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          900: "#0a422a",
        },
        yellow: {
          400: "#facc15",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
        },
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'], // Use for headings
        body: ['var(--font-inter)', 'sans-serif'],    // Use for body text
      },
    },
  },
  plugins: [],
};
export default config;
