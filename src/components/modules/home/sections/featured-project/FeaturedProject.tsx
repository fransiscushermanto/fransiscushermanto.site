"use client";

import { cx } from "@styled-system/css";

import { PROJECTS } from "@/constants/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/elements/project-card";
import { Link } from "@/components/elements/link";

import { featuredProjectCss } from "./styles";

const FeaturedProject = () => {
  return (
    <section className={cx("featured-project", featuredProjectCss)}>
      <div className="text-wrapper">
        <h2 className="title">Featured Projects</h2>
        <p className="muted-text">Some of my recent work and side projects</p>
      </div>
      <div className="featured-project__list">
        {[PROJECTS[0], PROJECTS[1]].map(({ name, tags }) => (
          <ProjectCard key={name} projectName={name} tags={tags} />
        ))}
      </div>
      <div className="feature-project__view-all">
        <Button asChild size="sm" variant="outline">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProject;
