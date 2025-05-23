import type { CardRootProps } from "@chakra-ui/react";

import { type Project, PROJECTS } from "@/constants/projects";

export interface ProjectCardProps extends CardRootProps, Omit<Project, "name"> {
  projectName: (typeof PROJECTS)[number]["name"];
}
