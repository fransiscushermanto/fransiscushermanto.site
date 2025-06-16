import { execute } from "@/graphql/execute";
import {
  RepositoryQueryDocument,
  type RepositoryQueryQuery,
} from "@/graphql/types/graphql";
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@/hooks/react-query";

export function graphqlGetProjectRepository(variables: {
  name: string;
  owner?: string;
}) {
  return execute(RepositoryQueryDocument, variables);
}

export function useRGQLGetProjectRepository(
  options: UseSuspenseQueryOptions<RepositoryQueryQuery> & {
    owner?: string;
    projectName: string;
  },
) {
  const { owner, projectName, ...restOptions } = options;

  return useSuspenseQuery({
    queryKey: ["repository", projectName],
    queryFn: async () =>
      graphqlGetProjectRepository({ name: projectName, owner }),
    ...restOptions,
  });
}
