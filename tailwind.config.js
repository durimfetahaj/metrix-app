/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#DBDEEE",
          20: "#C4CAE8",
          30: "#B6BFE8",
          40: "#ABB5E9",
          50: "#97A5EB",
          60: "#8899E9",
          70: "#7C8FEC",
          80: "#6D83EC",
          90: "#6078EC",
          100: "#5570F1",
        },
        secondary: {
          10: "#FEF9F2",
          20: "#FEF5EA",
          30: "#FFF2E2",
          40: "#FFF0DE",
          50: "#FFEAD1",
          60: "#FFE5C8",
          70: "#FFDFBA",
          80: "#FFDAAE",
          90: "#FFD29E",
          100: "#FFCC91",
        },
        black: {
          10: "#BEC0CA",
          20: "#A6A8B1",
          30: "#8B8D97",
          40: "#6E7079",
          50: "#53545C",
          60: "#45464E",
          70: "#37393F",
          80: "#33343A",
          90: "#2C2D33",
          100: "#1C1D22",
        },
        success: "#519C66",
        warning: "#FCD34D",
        error: "#CC5F5F",
      },
      backgroundColor: {
        default: "#F4F5FA", // Set your default background color here
      },
    },
  },
  plugins: [],
};
