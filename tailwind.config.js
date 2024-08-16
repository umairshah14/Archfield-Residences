/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'krona': ['var(--font-krona-one)', 'sans-serif'],
        'trirong': ['var(--font-trirong)', 'serif'],
      },
      keyframes: {
        fadein: {
          "0%": { display: "none", opacity: 0 },
          "1%": { display: "block" },
          "100%": { display: "block", opacity: 1 },
        },
        fadeout: {
          "0%": { display: "block", opacity: 1 },
          "1%": { display: "block" },
          "100%": { display: "none", opacity: 0 },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-out forwards",
        fadeout: "fadeout 0.5s ease-in forwards",
        "spin-slow": "spin 1.5s linear infinite",
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      width: {
        infinite: "2500px",
        "3/10": "30%",
        "4/10": "40%",
        92: "368px",
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          '-webkit-mask': 'linear-gradient(90deg, #0000, #000 5%, #000 95%, #0000)',
          'mask': 'linear-gradient(90deg, #0000, #000 5%, #000 95%, #0000)',
        },
      });
    },
  ],
}