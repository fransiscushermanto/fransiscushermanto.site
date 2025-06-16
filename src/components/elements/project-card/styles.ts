import { css } from "@pandacss/css";

export const projectCardCss = css({
  overflow: "hidden",
  minHeight: 380,

  "& .project-card": {
    "&__image": {
      aspectRatio: "2 / 1",
      display: "flex",
      backgroundColor: "hsl(var(--muted))",
    },
    "&__description": {
      display: "-webkit-box",
      lineClamp: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "&__tags": {
      overflow: "auto",

      display: "inline-flex",
      columnGap: 2,
      mb: 4,

      "& .chakra-tag": {
        "&__startElement": {
          display: "flex",
          flex: 1,
        },
        "&__label": {
          fontWeight: "medium",
          whiteSpace: "nowrap",
          overflow: "auto",
        },
      },

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "&__actions": {
      mt: "auto",
      display: "inline-flex",
      columnGap: 3,
    },
  },
});
