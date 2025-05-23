import dynamic from "next/dynamic";

const Projects = dynamic(() =>
  import("@/components/modules/projects").then((module) => module.Projects),
);

export default function ProjectsPage() {
  return <Projects />;
}
