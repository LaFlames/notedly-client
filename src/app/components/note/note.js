import React from 'react';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import styled from 'styled-components';

const StyledNote = styled.article`
  max-width: 800px;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const Note = ({ note }) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {dayjs(note.createdAt).format('DD/MM/YYYY')}
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em> {note.favoriteCount}
        </UserActions>
      </MetaData>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </StyledNote>
  );
};
export default Note;
