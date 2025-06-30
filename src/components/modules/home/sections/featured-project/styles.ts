import { css } from "@styled-system/css";

export const featuredProjectCss = css({
  "& .featured-project__list": {
    w: "full",
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 385px))",
    gap: 6,
  },
});
