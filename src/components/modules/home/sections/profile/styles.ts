import { css } from "@styled-system/css";

export const profileCss = css({
  textAlign: "center",

  "& .profile__picture": {
    overflow: "hidden",
    width: "10rem",
    height: "10rem",

    border: ".25rem solid hsl(var(--border))",
    rounded: "full",
  },

  "& .profile__job-title": {
    fontSize: "xl",
    fontWeight: "500",
    lineHeight: "1.75rem",
  },

  "& .profile__description": {
    maxW: 700,
    textAlign: "center",

    "& a": {
      position: "relative",
      whiteSpace: "nowrap",
      "& .underline": {
        display: "flex",

        zIndex: -1,
        pointerEvents: "none",

        position: "absolute",
        left: "50%",
        top: "120%",
        transform: "translate(-50%, -50%)",

        width: "fit-content",
      },
    },
  },

  "& .profile__actions": {
    display: "flex",
    columnGap: 4,
  },

  "& .profile__social-medias": {
    display: "flex",
    columnGap: 4,
    "& .social-media": {
      p: 2,
      transition: "color 0.2s ease-in-out",
      backgroundColor: "hsl(var(--secondary))",
      rounded: "full",

      _hover: {
        color: "hsl(var(--foreground))",
      },

      "& .icon svg": {
        width: "1.25rem",
        height: "1.25rem",
      },
    },
  },

  "& .profile__location": {
    display: "inline-flex",
    alignItems: "center",

    marginTop: 4,
    px: 3,
    py: 1,

    fontSize: "sm",

    border: "1px solid hsl(var(--border))",
    borderRadius: "full",

    "& .circle": {
      display: "inline-block",
      position: "relative",
      width: "0.5rem",
      height: "0.5rem",
      mr: 1,
      backgroundColor: "token(colors.green.500)",
      borderRadius: "full",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        backgroundColor: "token(colors.green.500)",
        borderRadius: "full",
        transform: "translate(-50%, -50%)",
        animation: "ripples 1.5s ease-out infinite",
      },
    },
  },
});
