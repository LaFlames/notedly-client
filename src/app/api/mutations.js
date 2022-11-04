import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation createNote($content: String!) {
    addNote(content: $content) {
      id
      content
      author {
        username
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;
