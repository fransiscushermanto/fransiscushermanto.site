import { defineConfig } from "@pandacss/dev";

import { config } from "@/components/ui/system";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: config.theme,
  },

  // The output directory for your css system
  outdir: "styled-system",
});
