import { css } from "@styled-system/css";

export const socialMediaCss = css({
  display: "flex",
  columnGap: 4,
  "& .social-media": {
    p: 2,
    transition: "color 0.2s ease-in-out",
    backgroundColor: "hsl(var(--secondary))",
    rounded: "full",

    _hover: {
      color: "hsl(var(--foreground))",
    },

    "& .icon svg": {
      width: "1.25rem",
      height: "1.25rem",
    },
  },
});
