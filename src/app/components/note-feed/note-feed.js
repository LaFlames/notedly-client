import React from 'react';
import Note from '../note';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NoteWrapper = styled.div`
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed = ({ notes, linkToNote = 'note' }) => {
  return (
    <div>
      {notes.length &&
        notes.map((note) => (
          <NoteWrapper key={note.id}>
            <Note note={note} />
            <NavLink to={`${linkToNote}/${note.id}`}>link</NavLink>
          </NoteWrapper>
        ))}
    </div>
  );
};
export default NoteFeed;
