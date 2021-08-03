import { gql } from "@apollo/client";

const QUERY = gql`
  query reposQuery(
    $username: String!
    $sortBy: String!
    $number: Int!
    $page: Int!
  ) {
    repos(username: $username, sortBy: $sortBy, number: $number, page: $page) {
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
