import { css } from "@pandacss/css";

export const headerCss = css({
  zIndex: "var(--z-index-header)",
  position: "sticky",
  top: 0,

  width: "full",
  height: "var(--header-height)",

  borderBottom: "1px solid hsl(var(--border))",
  backgroundColor: "token(hsl(var(--background)) / 0.6)",
  backdropFilter: "blur(8px)",

  "& .container": {
    height: "full",

    display: "flex",
    alignItems: "center",

    "& nav": {
      display: "flex",
      columnGap: 6,

      "& .nav-items": {
        display: "none",
        alignItems: "center",
        columnGap: 6,
        fontSize: "sm",

        md: {
          display: "flex",
        },

        "& .nav-item": {
          color: "token(hsl(var(--foreground))/ 0.6)",

          "&[data-active='true']": {
            color: "hsl(var(--foreground))",
            fontWeight: "bold",
          },
          "&:hover": {
            color: "token(hsl(var(--foreground)) / 0.8)",
          },
        },
      },
    },

    "& .theme-switch": {
      ml: "auto",
      display: "none",

      md: {
        display: "flex",
      },
    },

    "& .mobile-nav": {
      ml: "auto",
      display: "flex",
      md: {
        display: "none",
      },
    },
  },
});

export const mobileMenuDrawerCss = css({
  "& .nav-items": {
    display: "flex",
    flexDirection: "column",
    rowGap: 4,

    "&__item": {
      display: "inline-flex",
      alignItems: "center",

      padding: 2,
      "&__link": {
        position: "relative",
        "&:after": {
          content: '""',

          position: "absolute",
          top: "100%",
          transform: "translateY(-50%)",

          display: "block",
          width: "0",
          height: "1px",
          backgroundColor: "hsl(var(--primary))",
          marginTop: 2,

          transition: "width 0.1s ease-in-out",
        },

        "&:hover, &[data-active=true]": {
          "&:after": {
            width: "full",
          },
        },
      },
    },
  },
});
