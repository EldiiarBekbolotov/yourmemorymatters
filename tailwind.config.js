module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: "#f9edff",
          purple: "#391d47",
          violet: "#9a5999",
          yellow: "#ffd166",
          dark: "#181618",
          gray: "#575757",
          white: "#ffffff",
          "purple-dark": "#300546",
          "purple-light": "#f7e4ca6d",
        },
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "4xl": "32px",
        pill: "100px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.45s cubic-bezier(0.44, 0, 0.56, 1) forwards",
        "fade-up-delay-1":
          "fadeUp 0.45s 0.05s cubic-bezier(0.44, 0, 0.56, 1) forwards",
        "fade-up-delay-2":
          "fadeUp 0.45s 0.1s cubic-bezier(0.44, 0, 0.56, 1) forwards",
        "fade-up-delay-3":
          "fadeUp 0.45s 0.2s cubic-bezier(0.44, 0, 0.56, 1) forwards",
        ticker: "ticker 30s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
