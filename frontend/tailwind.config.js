/** @type {import('tailwindcss').Config} */
import daisy from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    extend: {
      colors: {
        green: "#7ABA78",
        "dark-green": "#1A4D2E",
        gray: "#35374B",
        purple: "#070F2B",
        blue: "#4D869C",
        info: "#EEF7FF",
        "green-light": "#CDE8E5",
        light: "#FBF8DD",
        yellow: "#FFC470",
        orange: "#ECB159",
        "yellow-light": "#FFEC9E",
        red: "#8B322C",
        black: "#121212",
        // 'transparent': 'transparent',
        // 'info': '#ccd5ae',
        // 'primary': '#bc4749',
        // 'green': '#a7c957',
        // 'green-dark': '#386641',
        // 'blue-dark': '#264653',
        // 'light': '#fefae0'
      },
    },
  },

  plugins: [daisy],
}
