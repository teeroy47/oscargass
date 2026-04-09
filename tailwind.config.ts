import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2B2E9B",
          "blue-dark": "#181B5C",
          red: "#ED1C24",
          surface: "#F5F7FB",
          ink: "#10131A",
          muted: "#667085",
          line: "#D7DCEA"
        }
      },
      boxShadow: {
        premium: "0 24px 60px rgba(16, 19, 26, 0.14)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
