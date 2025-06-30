import { css } from "@styled-system/css";

export const skillCss = css({
  "& .skill__technologies": {
    position: "relative",
    overflow: "hidden",
    maxW: "full",

    display: "flex",
    flexDirection: "column",
    rowGap: 2,

    py: 2,

    "& .technology": {
      px: 5,
      py: 2,
    },

    "&:after": {
      content: "''",
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background:
        "linear-gradient(90deg, token(colors.background), transparent 20%, transparent 80%, token(colors.background))",
    },
  },
});
