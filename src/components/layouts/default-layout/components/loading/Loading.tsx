"use client";

import { Portal } from "@chakra-ui/react";
import { css, cx } from "@styled-system/css";

import { useHandleLoadingIndicator } from "./usecase";

const Loading = () => {
  const { isHideLoadingIndicator, progress } = useHandleLoadingIndicator();

  return !isHideLoadingIndicator ? (
    <Portal>
      <div
        className={cx(
          "loading",
          css({
            pointerEvents: "none",
            zIndex: "var(--z-index-max)",
            position: "fixed",
            width: "token(100dvw, 100vw)",
            height: "token(100dvh, 100vh)",
            top: 0,
            left: 0,

            "& .loading__indicator": {
              zIndex: "inherit",
              position: "absolute",
              top: 0,
              left: 0,
              height: "3px",
              backgroundColor: "token(colors.foreground)",
            },
          }),
        )}
      >
        <div style={{ width: `${progress}%` }} className="loading__indicator" />
      </div>
    </Portal>
  ) : null;
};

export default Loading;
