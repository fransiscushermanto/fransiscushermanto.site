"use client";

import dynamic from "next/dynamic";
import { cx } from "@pandacss/css";

import { PROJECTS } from "@/constants/projects";
import { ProjectCardSkeleton } from "@/components/elements/project-card";
import { projectsCss } from "./styles";

const ProjectCard = dynamic(
  () =>
    import("@/components/elements/project-card").then(
      (module) => module.ProjectCard,
    ),
  {
    ssr: false,
    loading: () => <ProjectCardSkeleton />,
  },
);

const Projects = () => {
  return (
    <div className={cx("projects-page", "container", projectsCss)}>
      <div className="inner-container">
        <h1 className="title heading-text">Projects</h1>
        <p className="subtitle sub-heading-text">
          A collection of my work, side projects, and open source contributions.
        </p>
        <div className="projects-list">
          {PROJECTS.map(({ name, tags, owner }) => (
            <ProjectCard
              key={name}
              projectName={name}
              tags={tags}
              owner={owner}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
