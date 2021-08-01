import { gql } from "@apollo/client";

const QUERY = gql`
  query reposQuery {
    repos(username: "natasha-mann") {
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
