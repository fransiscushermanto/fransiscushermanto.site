import { css } from "@pandacss/css";

export const contactCss = css({
  display: "flex",
  flexDirection: "column",

  textAlign: "center",

  pb: 16,
  pt: 6,
  md: {
    py: 10,
  },

  "& .inner-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "full",
    maxW: 980,

    mx: "auto",

    py: {
      base: 8,
      lg: 16,
      md: 12,
    },

    "& .title": {
      mb: 6,
    },

    "& .subtitle": {
      mb: 12,
      maxW: 700,
      mx: "auto",
    },

    "& .contact-row": {
      display: "flex",
      flexDirection: "column",
      md: {
        flexDirection: "row",
      },
      flexWrap: "wrap",

      width: "full",
      maxW: "100%",
      gap: 6,

      "& .contact-column": {
        "--shadow": "0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a",

        flex: 1,
        display: "flex",
        flexDirection: "column",
        maxW: "100%",

        p: 6,

        wordBreak: "break-word",

        borderRadius: "xl",

        boxShadow:
          "var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--shadow)",

        "& .personal-information": {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 6,

          "& > div": {
            display: "flex",
            gap: 4,

            "& .icon": {
              mt: 0.5,
              display: "flex",
            },

            "& .detail": {
              "&__label": {
                fontWeight: "semibold",
                color: "var(--muted-text-color)",
              },

              "& a": {
                color: "var(--primary-color)",
                textDecoration: "none",

                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
          },
        },

        "& form": {
          display: "flex",
          flexDirection: "column",
          gap: 4,

          "& .chakra-field__root": {
            "&[data-invalid]": {
              "& #captcha": {
                border: "1px solid var(--colors-border-error) !important",
                borderRadius: "sm",
              },
            },
          },
        },
      },
    },
  },
});
