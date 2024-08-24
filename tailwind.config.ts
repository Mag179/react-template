/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./src/**/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        20: "0.2",
      },
      colors: {
        //   blue: {
        //     1: "#232B4F",
        //     2: "#6E4CCF",
        //     3: "#2262C1",
        //     4: "#4946D1",
        //     5: "#185ABD",
        //   },
      },
    },
    fontFamily: {
      "noto-san-jp": ["NotoSansJP"],
      inter: ["Inter"],
    },
  },
  variants: {},
  // plugins: [require("@tailwindcss/line-clamp")],
};
