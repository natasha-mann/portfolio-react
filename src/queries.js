import { gql } from "@apollo/client";

const QUERY = gql`
  query reposQuery {
    repos(username: "natasha-mann", sortBy: "updated", number: 10, page: 1) {
      name
      description
      gitHubUrl
      homepage
      createdAt
      updatedAt
      branch
      size
    }
  }
`;

export default QUERY;
