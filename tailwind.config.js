/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        serif: ['"Lora"', "serif"],
        code: ['"Fira Code"', "monospace"],
      },
      colors: {
        paper: "#f4f4f0",
        ink: "#111111",
        pencil: "#666666",
        accent: "#0000EE", // Hyperlink blue
        crt: {
          bg: "#050505",
          green: "#00ff00",
          amber: "#ffb000",
          dim: "#003300",
        },
      },
      boxShadow: {
        paper:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 2px 2px 0px rgba(0,0,0,0.1)",
        retro: "4px 4px 0px 0px #000000",
        crt: "0 0 10px rgba(0, 255, 0, 0.5), 0 0 2px rgba(0, 255, 0, 0.3)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#1a1a1a", // Body Text
            fontFamily: theme("fontFamily.serif"),

            // Headings
            h1: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
            },
            h2: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
            },
            h3: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
            },
            h4: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
            },

            // Links
            a: {
              color: theme("colors.accent"),
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.ink"),
              },
            },

            // Code Blocks (pre)
            pre: {
              backgroundColor: "#000000",
              color: "#4af626", // Terminal Green
              border: "1px solid #333",
              boxShadow: "4px 4px 0px 0px #000000", // Hard shadow
              fontFamily: theme("fontFamily.code"),
              borderRadius: "0px",
              overflowX: "auto", // Fix: Allow code to scroll horizontally
            },

            // Inline Code
            code: {
              backgroundColor: "#e5e7eb", // Light Grey
              color: theme("colors.ink"),
              fontFamily: theme("fontFamily.mono"),
              padding: "2px 4px",
              borderRadius: "2px",
              fontWeight: "400",
            },
            // Remove default backticks
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },

            // Images
            img: {
              border: "2px solid #000",
              boxShadow: "4px 4px 0px 0px #000",
              borderRadius: "0px",
            },
            "figure figcaption": {
              fontFamily: theme("fontFamily.mono"),
              color: theme("colors.pencil"),
              fontSize: "0.8rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
