import { TECHNOLOGIES } from "./technologies";

export interface Project {
  owner?: string;
  name: string;
  tags: Array<
    (typeof TECHNOLOGIES)[number]["name"] | { label: string; name: string }
  >;
}

export const PROJECTS: Array<Project> = [
  {
    name: "fransiscushermanto.site",
    tags: [
      "graphql",
      "apollo",
      "pandacss",
      "nextjs",
      "chakraui",
      "react",
      "typescript",
      "javascript",
      "css3",
      "html",
    ],
  },
  {
    owner: "julofinance",
    name: "julo-ui",
    tags: [
      { name: "library", label: "Library" },
      { name: "design-system", label: "Design System" },
      { name: "tree-shaking", label: "Tree Shaking" },
      "react",
      "storybook",
      "emotion",
      "typescript",
    ],
  },
  {
    name: "typescript_video_conference",
    tags: [
      "webrtc",
      "socket",
      "react",
      "nodejs",
      "typescript",
      "react-router",
      "react-hook-form",
      "javascript",
      "html",
      "css3",
    ],
  },
  {
    name: "ArtPlex",
    tags: ["php", "react", "html", "mysql", "javascript", "sass"],
  },
  {
    name: "Chatter",
    tags: [
      "socket",
      "react",
      "passport",
      "html",
      "nodejs",
      "mysql",
      "javascript",
      "express",
      "css3",
    ],
  },
  {
    name: "movie-list",
    tags: ["react", "react-router", "jest", "emotion", "typescript"],
  },
  {
    name: "anime-discovery",
    tags: [
      "graphql",
      "apollo",
      "react",
      "jest",
      "emotion",
      "nextjs",
      "typescript",
      "javascript",
    ],
  },
] as const;
