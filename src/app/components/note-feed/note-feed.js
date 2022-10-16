import React from 'react';
import Note from '../note';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NoteWrapper = styled.div`
  max-width: 800px;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => {
        const { id, ...rest } = note;

        return (
          <NoteWrapper key={id}>
            <Note note={rest} />
            <NavLink to={`note/${id}`}>Permalink</NavLink>
          </NoteWrapper>
        );
      })}
    </div>
  );
};
export default NoteFeed;
