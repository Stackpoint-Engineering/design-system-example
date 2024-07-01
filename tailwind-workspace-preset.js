/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../surface-components/src/**/*.{js,jsx,ts,tsx}", // Path to ShadCN components
    "../surface-ui/src/**/*.{js,jsx,ts,tsx}", // Path to the consuming package
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
        border: "var(--gray-100)",
        input: "var(--gray-100)",
        ring: "var(--primary-600)",
        background: "var(--gray-0)",
        foreground: "var(--gray-900)",
        primary: {
          DEFAULT: "var(--primary-600)",
          foreground: "var(--gray-0)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          400: "var(--primary-400)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        gray: {
          0: "var(--gray-0)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        secondary: {
          DEFAULT: "var(--gray-600-5)",
          foreground: "var(--gray-800)",
        },
        destructive: {
          DEFAULT: "var(--status-red)",
          foreground: "var(--gray-0)",
        },
        muted: {
          DEFAULT: "var(--gray-50)",
          foreground: "var(--gray-600)",
        },
        accent: {
          DEFAULT: "var(--gray-600-5)",
          foreground: "var(--gray-900)",
        },
        popover: {
          DEFAULT: "var(--gray-0)",
          foreground: "var(--gray-900)",
        },
        card: {
          DEFAULT: "var(--gray-0)",
          frosty: "var(--frosty-white-35-80)",
          foreground: "var(--gray-900)",
        },
        status: {
          red: "var(--status-red)",
          yellow: "var(--status-yellow)",
          orange: "var(--status-orange)",
          green: "var(--status-green)",
        }
      },
      spacing: {
        102: "25.5rem",
        106: "26.5rem",
        128: "32rem",
        136: "34rem",
        148: "37rem",
        152: "38rem",
        160: "40rem",
        180: "45rem",
      },
      backgroundImage: {
        primaryGradientBlueTeal: "var(--primaryGradientBlueTeal)",
        "frosty-white-35-80": "var(--frosty-white-35-80)",
        "frosty-white-75-95": "var(--frosty-white-75-95)",
      },
      boxShadow: {
        sm: "0px 2px 8px 0px rgba(9, 32, 98, 0.05)",
        DEFAULT: "0px 4px 12px 0px rgba(9, 32, 98, 0.05)",
        md: "0px 4px 12px 0px rgba(9, 32, 98, 0.10)",
        lg: "0px 5px 25px 0px rgba(9, 32, 98, 0.20)",
        xl: "0px 8px 32px 0px rgba(9, 32, 98, 0.25)",
      },
      fontSize: {
        base: [
          "1rem",
          { fontWeight: "400", lineHeight: "150%", letterSpacing: "-0.01em" },
        ],
        sm: [
          "0.75rem",
          { fontWeight: "400", lineHeight: "150%", letterSpacing: "-0.01em" },
        ],
        smdm: [
          "0.75rem",
          { fontWeight: "500", lineHeight: "150%", letterSpacing: "-0.01em" },
        ],
        md: [
          "1.25rem",
          { fontWeight: "400", lineHeight: "150%", letterSpacing: "-0.01em" },
        ],
        lg: [
          "1.5rem",
          { fontWeight: "400", lineHeight: "150%", letterSpacing: "-0.01em" },
        ],
        h1: [
          "4rem",
          { fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.02em" },
        ],
        h2: [
          "3rem",
          { fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.02em" },
        ],
        h3: [
          "2rem",
          { fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.02em" },
        ],
        h4: [
          "1.25rem",
          { fontWeight: "600", lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        h5: [
          "1rem",
          { fontWeight: "600", lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        h6: [
          "0.75rem",
          { fontWeight: "600", lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
      },
      fontFamily: {
        sans: "Satoshi, Inter, Arial", // Satoshi needs to be loaded separately @ALFREDO
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        "suggestion-columns": "auto 2fr auto",
        "two-columns": "2fr auto",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".last:mb-0": {
          "&:last-child": {
            marginBottom: "0",
          },
        },
      });
    },
  ],
};
