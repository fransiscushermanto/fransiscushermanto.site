import { css } from "@styled-system/css";

export const projectsCss = css({
  display: "flex",
  flexDirection: "column",

  textAlign: "center",

  pb: 16,
  pt: 6,
  md: {
    py: 10,
  },

  "& .inner-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "full",

    py: {
      base: 8,
      lg: 16,
      md: 12,
    },

    "& .title": {
      mb: 6,
    },

    "& .subtitle": {
      mb: 12,
    },

    "& .projects-list": {
      w: "full",
      display: "grid",
      justifyContent: 'center',
      gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 385px))",
      gap: 6,
    },
  },
});
