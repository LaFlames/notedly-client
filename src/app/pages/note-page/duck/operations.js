import { gql } from '@apollo/client';

export const GET_NOTE = gql`
  query Note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
      }
    }
  }
`;
