import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  cssVarsPrefix: "",
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "unset",
        },
      },
      colors: {
        primary: {
          50: { value: "#E6ECF8" }, // Lightest Shade
          100: { value: "#A1B4D6" },
          200: { value: "#7A8EB4" },
          300: { value: "#55698E" },
          400: { value: "#334774" },
          500: { value: "#1E2A47" }, // Main Color (Dark Blue)
          600: { value: "#18223A" },
          700: { value: "#131C2F" },
          800: { value: "#0D1625" },
          900: { value: "#07101B" }, // Darkest Shade
        },
        secondary: {
          50: { value: "#F4F6F9" }, // Lightest Shade
          100: { value: "#D1D3D8" }, // Light Grey
          200: { value: "#B1B4BF" },
          300: { value: "#9A9FAC" },
          400: { value: "#83878A" },
          500: { value: "#6C6F76" },
          600: { value: "#55585E" },
          700: { value: "#404345" },
          800: { value: "#2C2F32" },
          900: { value: "#191C1F" }, // Darkest Shade
        },
        tertiary: {
          50: { value: "#F9F8E6" }, // Lightest Shade
          100: { value: "#F4F1E1" }, // Soft Beige
          200: { value: "#E8E4D6" },
          300: { value: "#DAD6C2" },
          400: { value: "#B8B59F" },
          500: { value: "#A2A27C" },
          600: { value: "#8C8A61" },
          700: { value: "#74764E" },
          800: { value: "#5C5E3B" },
          900: { value: "#43472A" }, // Darkest Shade
        },
        accent: {
          50: { value: "#F8F1B8" }, // Lightest Shade
          100: { value: "#F8C146" }, // Golden Yellow (Accent)
          200: { value: "#F9D570" },
          300: { value: "#F9E190" },
          400: { value: "#F8E3A9" },
          500: { value: "#F8D7C3" },
          600: { value: "#F8C6A6" },
          700: { value: "#F8B88A" },
          800: { value: "#F8A56D" },
          900: { value: "#F89B50" }, // Darkest Shade
        },
        link: {
          50: { value: "#A0D6D0" }, // Lightest Shade
          100: { value: "#2D6A5D" }, // Muted Teal (Link Color)
          200: { value: "#275C50" },
          300: { value: "#1E4E42" },
          400: { value: "#173F33" },
          500: { value: "#12362A" },
          600: { value: "#0F2B21" },
          700: { value: "#0C1F18" },
          800: { value: "#091512" },
          900: { value: "#060B0A" }, // Darkest Shade
        },
      },
    },
    keyframes: {
      ripples: {
        "0%": {
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 0.4,
        },
        "100%": {
          transform: "translate(-50%, -50%) scale(3)",
          opacity: 0,
        },
      },
    },
    semanticTokens: {
      zIndex: {
        header: {
          DEFAULT: { value: "token(zIndex.sticky)" },
        },
      },
      colors: {
        background: {
          DEFAULT: { value: "hsl(var(--background))" },
        },
        foreground: {
          DEFAULT: { value: "hsl(var(--foreground))" },
        },
        card: {
          DEFAULT: { value: "hsl(var(--card))" },
        },
        "card-foreground": {
          DEFAULT: { value: "hsl(var(--card-foreground))" },
        },
        popover: {
          DEFAULT: { value: "hsl(var(--popover))" },
        },
        "popover-foreground": {
          DEFAULT: { value: "hsl(var(--popover-foreground))" },
        },
        primary: {
          DEFAULT: { value: "hsl(var(--primary))" },
        },
        "primary-foreground": {
          DEFAULT: { value: "hsl(var(--primary-foreground))" },
        },
        secondary: {
          DEFAULT: { value: "hsl(var(--secondary))" },
        },
        "secondary-foreground": {
          DEFAULT: { value: "hsl(var(--secondary-foreground))" },
        },
        muted: {
          DEFAULT: { value: "hsl(var(--muted))" },
        },
        "muted-foreground": {
          DEFAULT: { value: "hsl(var(--muted-foreground))" },
        },
        accent: {
          DEFAULT: { value: "hsl(var(--accent))" },
        },
        "accent-foreground": {
          DEFAULT: { value: "hsl(var(--accent-foreground))" },
        },
        destructive: {
          DEFAULT: { value: "hsl(var(--destructive))" },
        },
        "destructive-foreground": {
          DEFAULT: { value: "hsl(var(--destructive-foreground))" },
        },
        border: {
          DEFAULT: { value: "hsl(var(--border))" },
        },
        input: {
          DEFAULT: { value: "hsl(var(--input))" },
        },
        ring: {
          DEFAULT: { value: "hsl(var(--ring))" },
        },
      },
      radii: {
        radius: {
          DEFAULT: { value: "var(--radius)" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
