import { css } from "@styled-system/css";

export const tagCss = css({
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
});