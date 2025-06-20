import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiJest,
  SiStorybook,
  SiSocketdotio,
  SiPwa,
  SiWebrtc,
  SiChakraui,
  SiGraphql,
  SiReactquery,
  SiReacthookform,
  SiReacttable,
  SiFoodpanda,
  SiStyledcomponents,
  SiApollographql,
  SiVite,
  SiVitest,
  SiReactrouter,
  SiSass,
  SiPassport,
} from "react-icons/si";

export interface Technology {
  name: (typeof TECHNOLOGIES)[number]["name"];
  label: string;
  icon: {
    color: { _light?: string; _dark?: string };
    element: React.JSX.Element;
  };
}

export const TECHNOLOGIES = [
  {
    name: "html",
    label: "HTML5",
    icon: {
      color: { _light: "orange.600", _dark: "orange.300" },
      element: <SiHtml5 />,
    },
  },
  {
    name: "css3",
    label: "CSS3",
    icon: {
      color: { _light: "blue.500", _dark: "blue.300" },
      element: <SiCss3 />,
    },
  },
  {
    name: "mysql",
    label: "MySQL",
    icon: {
      color: { _light: "blue.600", _dark: "blue.300" },
      element: <SiMysql />,
    },
  },
  {
    name: "react",
    label: "React",
    icon: {
      color: { _light: "blue.400", _dark: "blue.200" },
      element: <SiReact />,
    },
  },
  {
    name: "express",
    label: "Express",
    icon: {
      color: { _light: "gray.600", _dark: "gray.400" },
      element: <SiExpress />,
    },
  },
  {
    name: "nextjs",
    label: "Next.js",
    icon: {
      color: { _light: "black.500", _dark: "white" },
      element: <SiNextdotjs />,
    },
  },
  {
    name: "javascript",
    label: "JavaScript",
    icon: {
      color: { _light: "yellow.400", _dark: "yellow.200" },
      element: <SiJavascript />,
    },
  },
  {
    name: "typescript",
    label: "TypeScript",
    icon: {
      color: { _light: "blue.600", _dark: "blue.300" },
      element: <SiTypescript />,
    },
  },
  {
    name: "php",
    label: "PHP",
    icon: {
      color: { _light: "purple.600", _dark: "purple.300" },
      element: <SiPhp />,
    },
  },
  {
    name: "laravel",
    label: "Laravel",
    icon: {
      color: { _light: "red.600", _dark: "red.300" },
      element: <SiLaravel />,
    },
  },
  {
    name: "jest",
    label: "Jest",
    icon: {
      color: { _light: "red.700", _dark: "red.400" },
      element: <SiJest />,
    },
  },
  {
    name: "storybook",
    label: "Storybook",
    icon: {
      color: { _light: "pink.600", _dark: "pink.300" },
      element: <SiStorybook />,
    },
  },
  {
    name: "socket",
    label: "Socket.io",
    icon: {
      color: { _light: "black.500", _dark: "white" },
      element: <SiSocketdotio />,
    },
  },
  {
    name: "pwa",
    label: "PWA",
    icon: {
      color: { _light: "purple.700", _dark: "purple.400" },
      element: <SiPwa />,
    },
  },
  {
    name: "nodejs",
    label: "Node.js",
    icon: {
      color: { _light: "green.600", _dark: "green.300" },
      element: <SiNodedotjs />,
    },
  },
  {
    name: "webrtc",
    label: "WebRTC",
    icon: {
      color: { _light: "orange.500", _dark: "orange.300" },
      element: <SiWebrtc />,
    },
  },
  {
    name: "chakraui",
    label: "Chakra UI",
    icon: {
      color: { _light: "teal.500", _dark: "teal.300" },
      element: <SiChakraui />,
    },
  },
  {
    name: "graphql",
    label: "GraphQL",
    icon: {
      color: { _light: "purple.600", _dark: "purple.300" },
      element: <SiGraphql />,
    },
  },
  {
    name: "react-query",
    label: "React Query",
    icon: {
      color: { _light: "orange.500", _dark: "orange.300" },
      element: <SiReactquery />,
    },
  },
  {
    name: "react-hook-form",
    label: "React Hook Form",
    icon: {
      color: { _light: "blue.600", _dark: "blue.300" },
      element: <SiReacthookform />,
    },
  },
  {
    name: "react-table",
    label: "React Table",
    icon: {
      color: { _light: "purple.600", _dark: "purple.300" },
      element: <SiReacttable />,
    },
  },
  {
    name: "pandacss",
    label: "Panda CSS",
    icon: {
      color: { _light: "yellow.300", _dark: "yellow.200" },
      element: <SiFoodpanda />,
    },
  },
  {
    name: "emotion",
    label: "Emotion",
    icon: {
      color: { _light: "pink.500", _dark: "pink.300" },
      element: <SiStyledcomponents />,
    },
  },
  {
    name: "apollo",
    label: "Apollo GraphQL",
    icon: {
      color: { _light: "purple.600", _dark: "purple.300" },
      element: <SiApollographql />,
    },
  },
  {
    name: "vite",
    label: "Vite",
    icon: {
      color: { _light: "purple.500", _dark: "purple.300" },
      element: <SiVite />,
    },
  },
  {
    name: "vitest",
    label: "Vitest",
    icon: {
      color: { _light: "green.400", _dark: "green.300" },
      element: <SiVitest />,
    },
  },
  {
    name: "react-router",
    label: "React Router",
    icon: {
      color: { _light: "dark.500", _dark: "white.300" },
      element: <SiReactrouter />,
    },
  },
  {
    name: "sass",
    label: "Sass",
    icon: {
      color: { _light: "pink.600", _dark: "pink.300" },
      element: <SiSass />,
    },
  },
  {
    name: "passport",
    label: "Passport.js",
    icon: {
      color: { _light: "blue.600", _dark: "blue.300" },
      element: <SiPassport />,
    },
  },
] as const;
