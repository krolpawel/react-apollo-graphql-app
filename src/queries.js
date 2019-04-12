import { gql } from 'apollo-boost';

export const reposQuery = gql`
  query Myrepositories($first:Int!){
    viewer {
      repositories(first: $first) {
        edges {
          node {
            id
            name
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const userQuery = gql`
{
  viewer {
    name
    email
  }
}
`;
