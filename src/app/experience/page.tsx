import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/modules/experience").then(module => module.Experience ));

export default function ExperiencePage() {
  return <Experience />;
}
