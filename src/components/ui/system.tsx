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
    semanticTokens: {
      colors: {
        primary: {
          value: "{colors.primary.500}",
        },
        secondary: {
          value: "{colors.secondary.100}",
          description:
            "Colors for secondary text, borders, icons, or background sections",
        },
        tertiary: {
          value: "#F4F1E1",
          description:
            "Colors for backgrounds, card elements, or even hover states",
        },
        accent: {
          value: "#F8C146",
          description:
            "Colors for highlights or key interactions (such as button hover states) to create contrast and vibrancy",
        },
        link: {
          value: "#2D6A5D",
          description: "Colors for links, small icons, or hover effects",
        },
        bg: {
          DEFAULT: {
            value: {
              _light: "{colors.secondary}",
              _dark: "{colors.primary.800}",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: "{colors.primary}",
              _dark: "{colors.primary.100}",
            },
          },
        },
        "text-primary": {
          DEFAULT: {
            value: {
              _light: "{colors.primary}",
              _dark: "{colors.primary.100}",
            },
          },
        },
        "text-secondary": {
          DEFAULT: {
            value: {
              _light: "{colors.secondary.700}",
              _dark: "{colors.secondary}",
            },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
