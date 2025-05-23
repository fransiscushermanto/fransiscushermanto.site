import { gql } from "@apollo/client";

const repositoryQuery = gql(`
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
