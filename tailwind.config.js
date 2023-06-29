/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
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
          background: "#F4F5FA",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
