import { sva } from "@pandacss/css";

export const home = sva({
  className: "home",
  slots: ["root", "profile-picture", "profile-info", "profile-social-media"],
  base: {
    root: {
      zIndex: 1,

      width: "100%",
      maxWidth: "md",
      minHeight: "token(100dvh, 100vh)",
      height: "auto",

      margin: "0 auto",
      paddingX: "2",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      rowGap: "6",

      backgroundColor: "bg",

      "& .background": {
        zIndex: -1,
        position: "fixed",

        pointerEvents: "none",
        userSelect: "none",

        width: "100%",
        height: "100%",

        display: "flex",

        "& svg": {
          width: "100%",
          height: "100%",

          fill: {
            _dark: "token(colors.tertiary/40)",
            _light: "token(colors.primary)",
          },

          maskImage:
            "radial-gradient(50vh circle at center, token(colors.white), transparent)",
        },
      },
    },
    "profile-picture": {
      overflow: "hidden",

      width: 126,
      height: 126,

      display: "flex",

      border: "1px solid",
      borderColor: {
        _dark: "token(colors.secondary)",
        _light: "token(colors.secondary.900)",
      },
      borderRadius: "full",

      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    "profile-info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "2",

      "& .location": {
        display: "inline-flex",
        alignItems: "center",
        columnGap: "2",

        textAlign: "center",

        fontFamily: "var(--font-geist-mono)",
        color: "text-secondary",
      },
    },
    "profile-social-media": {
      display: "inline-flex",
      columnGap: "2",
      "& .social-media": {
        "& a": {
          display: "flex",
          "& button": {
            backgroundColor: "bg",
            _hover: {
              backgroundColor: "secondary.200/70",
            },

            "& svg": {
              fill: "text-secondary",
            },
          },
        },
      },
    },
  },
})();
