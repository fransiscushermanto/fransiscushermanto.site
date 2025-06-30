import { css } from "@styled-system/css";

export const infiniteLoopSliderCss = css({
  animation: "loop 100s linear infinite",
  "&[data-reversed=true]": {
    animationDirection: "reverse",
  },
});
