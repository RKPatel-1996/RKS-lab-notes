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
      },
      boxShadow: {
        paper:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 2px 2px 0px rgba(0,0,0,0.1)",
        retro: "4px 4px 0px 0px #000000",
        "retro-dark": "4px 4px 0px 0px #ffffff",
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
            maxWidth: "75ch",
            margin: "0 auto",
            lineHeight: "1.7",
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            // Headings
            h1: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.2",
            },
            h2: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
              fontSize: "1.75em",
              marginTop: "2.5em",
              marginBottom: "1em",
              paddingBottom: "0.25em",
              borderBottom: "2px solid #000000",
              lineHeight: "1.3",
            },
            h3: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
              fontSize: "1.25em",
              marginTop: "2em",
              marginBottom: "0.75em",
              lineHeight: "1.4",
            },
            h4: {
              fontFamily: theme("fontFamily.mono"),
              color: "#000000",
              fontWeight: "700",
              fontSize: "1em",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: "1.5",
            },
            // Lists
            ul: {
              marginTop: "1em",
              marginBottom: "1em",
              paddingLeft: "1.5em",
              listStyleType: "square",
            },
            ol: {
              marginTop: "1em",
              marginBottom: "1em",
              paddingLeft: "1.5em",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            // Blockquotes
            blockquote: {
              fontStyle: "italic",
              borderLeftWidth: "4px",
              borderLeftColor: "#000000",
              paddingLeft: "1em",
              marginTop: "1.5em",
              marginBottom: "1.5em",
              color: "#333333",
              quotes: "none",
            },
            // Links
            a: {
              color: theme("colors.accent"),
              textDecoration: "underline",
              textDecorationThickness: "1px",
              textUnderlineOffset: "2px",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.ink"),
                textDecorationThickness: "2px",
              },
            },
            // Code Blocks (pre)
            pre: {
              backgroundColor: "#0d0d0d",
              color: "#f3f4f6", // Monochrome crisp code text
              border: "2px solid #000000",
              boxShadow: "4px 4px 0px 0px #000000", // Hard shadow
              fontFamily: theme("fontFamily.code"),
              borderRadius: "0px",
              overflowX: "auto", // Fix: Allow code to scroll horizontally
              marginTop: "1.5em",
              marginBottom: "1.5em",
              padding: "1.25em",
            },
            // Inline Code
            code: {
              backgroundColor: "#e5e7eb", // Light Grey
              color: theme("colors.ink"),
              fontFamily: theme("fontFamily.mono"),
              padding: "0.2em 0.4em",
              borderRadius: "2px",
              fontWeight: "400",
              fontSize: "0.875em",
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
              marginTop: "2em",
              marginBottom: "2em",
            },
            "figure figcaption": {
              fontFamily: theme("fontFamily.mono"),
              color: theme("colors.pencil"),
              fontSize: "0.8rem",
              marginTop: "0.5em",
            },
            // hr
            hr: {
              borderColor: "#000000",
              borderTopWidth: "2px",
              marginTop: "2.5em",
              marginBottom: "2.5em",
            }
          },
        },
        invert: {
          css: {
            color: "#d1d5db",
            h1: { color: "#ffffff" },
            h2: { color: "#ffffff", borderBottomColor: "#ffffff" },
            h3: { color: "#ffffff" },
            h4: { color: "#ffffff" },
            blockquote: {
              color: "#e5e7eb",
              borderLeftColor: "#ffffff",
            },
            "blockquote strong": { color: "#ffffff" },
            "blockquote b": { color: "#ffffff" },
            "blockquote em": { color: "#f3f4f6" },
            a: {
              color: "#ffffff",
              "&:hover": { color: "#d1d5db" },
            },
            strong: { color: "#ffffff" },
            b: { color: "#ffffff" },
            em: { color: "#f3f4f6" },
            th: { color: "#ffffff" },
            td: { color: "#d1d5db" },
            caption: { color: "#d1d5db" },
            hr: { borderColor: "#ffffff" },
            "figure figcaption": { color: "#d1d5db" },
            code: {
              color: "#ffffff",
              backgroundColor: "#1f1f1f",
            },
            pre: {
              backgroundColor: "#0e0e0e",
              color: "#ffffff",
              border: "2px solid #ffffff",
              boxShadow: "4px 4px 0px 0px #ffffff",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
