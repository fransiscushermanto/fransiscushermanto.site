import dynamic from "next/dynamic";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { PROJECTS } from "@/constants/projects";
import { queryClient } from "@/react-query/client";
import { graphqlGetProjectRepository } from "@/repositories/projects";

const Home = dynamic(() =>
  import("@/components/modules/home").then((module) => module.Home),
);

export default async function HomePage() {
  await Promise.all(
    [PROJECTS[0], PROJECTS[1]].map(
      async ({ name, owner }) =>
        await queryClient.prefetchQuery({
          queryKey: ["repository", name],
          queryFn: async () => graphqlGetProjectRepository({ name, owner }),
        }),
    ),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
