/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "alex-brush": ["Alex Brush", "cursive"]
      },
      colors: {
        dark: "#161C24",
        light: "#F9FAFB",
        gray: "#CED3D0",
        white: "#FFFFFF",
        primary: "#677B71",
        secondary: "#ECEDE8",
        success: "#8FB02B",
        error: "#EE5252",
        danger: "#EE5252",
        warning: "#F5CC3C",
        info: "#47C5DF"
      },
      backgroundImage: {
        "banner-home": "url('/assets/img/banner/banner-home.png')",
        "banner-paket": "url('./assets/img/banner/banner-paket.jpeg')",
        "banner-portofolio": "url('./assets/img/banner/banner-portofolio.jpg')",
        "banner-collection": "url('./assets/img/banner/banner-collection.jpeg')"
      },
      container: {
        center: true,
      }
    }
  },
  daisyui: { themes: ["light"] },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#677B71",
          secondary: "#ECEDE8",
          success: "#8FB02B",
          error: "#EE5252",
          warning: "#F5CC3C",
          info: "#47C5DF",
          accent: "#47dfbc"
        }
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"]
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
