import { css } from "@styled-system/css";

export const footerCss = css({
  width: "full",

  borderTop: "1px solid hsl(var(--border))",
  py: 6,

  "& .container": {
    gap: 4,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& .muted-text": {
      fontSize: "sm",
      textAlign: "center",
    },

    "& .social-media": {
      justifyContent: "center",
    },
  },

  md: {
    py: 10,

    "& .container": {
      flexDirection: "row",
      alignItems: "center",

      "& .social-media": {
        ml: "auto",
      },
    },
  },
});
