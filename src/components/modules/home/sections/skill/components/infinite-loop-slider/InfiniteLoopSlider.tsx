import React, { Children } from "react";
import { cx } from "@pandacss/css";
import { Stack } from "@chakra-ui/react";

import type { InfiniteLoopSliderProps } from "./types";
import { infiniteLoopSliderCss } from "./styles";
import "./keyframes.css";

const InfiniteLoopSlider = (props: InfiniteLoopSliderProps) => {
  const { isReversed, children, className, ...restProps } = props;

  return (
    <Stack
      data-reversed={isReversed}
      display="inline-flex"
      flexDirection="row"
      w="full"
      className={cx("infinite-loop-slider", infiniteLoopSliderCss, className)}
      {...restProps}
    >
      {children}
      {Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.key) {
          return React.cloneElement(child, {
            key: `${child.key}-duplicate-${index}`,
          });
        }

        return React.cloneElement(
          React.isValidElement(child) ? child : <>{child}</>,
          { key: `duplicate-item-${index}` },
        );
      })}
    </Stack>
  );
};

export default InfiniteLoopSlider;
