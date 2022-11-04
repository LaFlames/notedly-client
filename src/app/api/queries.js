import { gql } from '@apollo/client';

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export const GET_ME = gql`
  query me {
    me {
      id
      favoriteNotes {
        id
      }
    }
  }
`;

export const GET_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
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
  }
`;

export const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
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
  }
`;

export const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
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
  }
`;

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
