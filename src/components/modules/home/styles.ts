import { css } from "@styled-system/css";

export const homeCss = css({
  pt: 6,
  pb: 16,
  md: {
    py: 10,
  },

  minH: "token(100dvh, 100vh)",

  "& > section": {
    mx: "auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 6,

    maxW: 980,
    py: {
      base: 8,
      lg: 16,
      md: 12,
    },

    "& .text-wrapper": {
      display: "flex",
      flexDirection: "column",
      rowGap: 4,

      "& .title": {
        fontSize: "3xl",
        lineHeight: "2.25rem",
        textAlign: "center",
      },
    },
  },
});
