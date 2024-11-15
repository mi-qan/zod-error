import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.4rem",
      xl: "1.6rem",
      "2xl": "1.8rem",
      "3xl": "2.4rem",
      "4xl": "3.2rem",
      "5xl": "6rem",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1920px",
      },
    },
    fontFamily: {
      sans: "SF Pro, ui-sans-serif, system-ui",
      SF: "SF Pro",
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        snow: "var(--snow)",
        "moon-blue": "var(--moon-blue)",
        "outer-space": "var(--outer-space)",
        lemon: "var(--lemon)",
        "jungle-green": "var(--jungle-green)",
        "rose-wood": "var(--rose-wood)",
        "roman-silver": "var(--roman-silver)",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-enter": {
          from: { opacity: "0" },
          to: { opacity: "0.4" },
        },
        "fade-exit": {
          from: { opacity: "0" },
          to: { opacity: "0.4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
