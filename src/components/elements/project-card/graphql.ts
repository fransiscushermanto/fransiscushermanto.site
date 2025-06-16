import { graphql } from "@/graphql/types";

const repositoryQuery = graphql(`
  query RepositoryQuery($owner: String = "fransiscushermanto", $name: String!) {
    repository(owner: $owner, name: $name) {
      isArchived
      url
      homepageUrl
      description
      descriptionHTML
      name
      id
      openGraphImageUrl
    }
  }
`);

export default repositoryQuery;
