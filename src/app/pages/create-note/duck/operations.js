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
