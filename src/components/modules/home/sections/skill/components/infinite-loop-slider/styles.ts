import { css } from "@pandacss/css";

export const infiniteLoopSliderCss = css({
  animation: "loop 100s linear infinite",
  "&[data-reversed=true]": {
    animationDirection: "reverse",
  },
});
