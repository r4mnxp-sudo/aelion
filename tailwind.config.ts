import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      backgroundImage: {
        'button-gradient': 'linear-gradient(to left, #542297, rgba(12, 25, 31))',
        'aelion': "url('/images/aelion_a.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'button-lights': "url('/images/button-lights.svg')",
          'button-transparent': "url('/images/bgtransparency.svg')",
          'card-lights': "url('/images/card-lights.svg')",
          'hero-svg': "url('/images/wave.svg')",
          'content-svg': "url('/images/wave2.svg')",
          'rounded-svg': "url('/images/rounded.svg')",
          'dots-svg': "url('/images/dots.svg')",
          'details-svg': "url('/images/details.svg')",
      },
      colors: {
        primary: "#542297",
        secondary: '#5D5FEF',
        lightbg: '#FFFFFF',
        darkbg: '#0D0A14',
        darkgreen: '#213D39',
        lightbg_2: '#F3F3F3',
        darkbg_2: '#07060C',
        txts: '#949CA9',
        whitesky: '#F4F9FF',
      },
      backgroundSize: {
        'auto-100': 'auto 100%',
        'auto-105': 'auto 105%',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        manrope: ['var(--font-manrope)'],
        inter: ['var(--font-inter)'],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
