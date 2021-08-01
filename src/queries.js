import { gql } from "@apollo/client";

const QUERY = gql`
  query reposQuery {
    repos {
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
