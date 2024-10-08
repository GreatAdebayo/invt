/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      100: "t_100",
      200: "e_200",
      300: "l_300",
      400: "r_400",
      500: "m_500",
      600: "s_600",
      700: "bo_700",
      800: "exb_800",
      900: "ba_900",
      950: "h_950",
    },

    extend: {
      colors: {
        "link-blue": "#0033FF",
        "theme-blue": "#325a6d",
        "theme-gold": "#e5b611",
        "theme-light-gold": "#f5e003",
        "theme-black": "#101010",
        "theme-white": "#ffffff",
        "theme-beige": "#d69e77",
        "theme-light-green": "#D8F4E1",
        "theme-green": "#3CC76B",
        "theme-red": "#FF0000",
        "theme-light-red": "#FFCCCC",
        "theme-yellow": "#FFAB00",
        "theme-light-yellow": "#FFEECC",
        "theme-brown": "#3f1f14",
        "theme-gray": "#E6E6E6",
        "theme-text-gray": "#686868",
        "theme-b-gray": "#C7C7C7",
      },
    },
  },

  plugins: [],
};
