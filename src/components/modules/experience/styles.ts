import { css } from "@pandacss/css";

export const experienceCss = css({
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
    },

    "& .experience-journey": {
      "& .experience-journey__item": {
        gap: 6,

        "&[data-current='false']": {
          "& .chakra-timeline__indicator": {
            _light: {
              backgroundColor: "token(colors.white)",
            },
            _dark: {
              backgroundColor: "token(colors.black)",
            },
            border: "2px solid token(colors.primary)",
          },
        },

        "&[data-current='true']": {
          "& .chakra-timeline__indicator": {
            position: "relative",
            "&:before": {
              content: '""',
              zIndex: -1,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              width: "full",
              height: "full",

              backgroundColor: "token(colors.primary.50)",
              borderRadius: "full",

              animation: "ripples 1.5s ease-out infinite",
            },
          },
        },

        "& .experience-journey__content": {
          p: 6,
          gap: 6,
          mt: 2,

          border: "1px solid hsl(var(--border))",
          borderRadius: "xl",

          "& .job": {
            gap: 2,

            "&__column": {
              display: "flex",
              flexDirection: "column",
              gap: 1,

              "&__company": {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,

                "& .company-icon": {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                },

                "& .company-name": {
                  fontSize: "sm",
                  fontWeight: "normal",
                },
              },

              "&.right > *": {
                display: "flex",
                md: {
                  justifyContent: "flex-end",
                },
                gap: 1,

                fontWeight: "light",

                "& .date-icon, & .location-icon": {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
          },

          "& .job-responsibilities": {
            display: "flex",
            flexDirection: "column",
            gap: 2,

            "& .responsibility-list": {
              "& .responsibility": {
                display: "flex",
                gap: 2,

                "& .bullet-point": {
                  mt: 3,
                  display: "inline-block",
                  width: "1.5",
                  height: "1.5",
                  borderRadius: "full",
                  backgroundColor: "hsl(var(--primary))",
                  flexShrink: 0,
                },
                "& .label": {
                  lineHeight: "loose",
                },
              },
            },
          },
        },
      },
    },
  },
});
