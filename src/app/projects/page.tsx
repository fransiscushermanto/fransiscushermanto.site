import dynamicImport from "next/dynamic";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { PROJECTS } from "@/constants/projects";
import { graphqlGetProjectRepository } from "@/repositories/projects";
import { queryClient } from "@/react-query/client";

export const dynamic = "force-dynamic";

const Projects = dynamicImport(() =>
  import("@/components/modules/projects").then((module) => module.Projects),
);

export default async function ProjectsPage() {
  await Promise.all(
    PROJECTS.map(
      async ({ name, owner }) =>
        await queryClient.prefetchQuery({
          queryKey: ["repository", name],
          queryFn: async () => graphqlGetProjectRepository({ name, owner }),
        }),
    ),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Projects />
    </HydrationBoundary>
  );
}
