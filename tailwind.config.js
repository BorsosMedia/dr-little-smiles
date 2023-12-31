import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      montserrat:
        'url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap")',
    },
    colors: {
      black: "#444444",
      "dark-blue": "#2D59E2",
      "light-blue": "#45A2FF",
      "light-grey": "#F1F8FF",
      "dark-grey": "#E8F3FF",
      "text-grey": "#95A4B5",
      "border-grey": "#D2DAE3",
      "button-grey": "#5A7788",
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
    backgroundImage: {
      "about-bg": "url('/assets/about-bg.png')",
      "about-mobile-bg": "url('/assets/about-mobile-bg.jpg')",
      "cavities-bg": "url('/assets/cavities-bg.jpg')",
      "footer-bg": "url('/assets/footer.png')",
      "hero-bg": "url('/assets/hero.jpg')",
      "hero-mobile-bg": "url('/assets/hero-mobile.jpg')",
      "prevention-bg": "url('/assets/prevention-bg.jpg')",
      "prevention-mobile-bg": "url('/assets/prevention-mobile-bg.jpg')",
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  require("tailwind-scrollbar")({ nocompatible: true }),
];
