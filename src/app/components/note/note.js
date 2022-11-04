import React from 'react';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import * as API from '../../api';

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
  const { loading, error, data } = useQuery(API.IS_LOGGED_IN);
  const { loading: userLoading, data: userData } = useQuery(API.GET_ME);

  if (loading || userLoading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {dayjs(note.createdAt).format('DD/MM/YYYY')}
        </MetaInfo>
        {data.isLoggedIn && userData.me.id === note.author.id ? (
          <UserActions>
            <NavLink to={`/edit/${note.id}`}>Edit</NavLink>
            <div>
              <em>Favorites:</em> {note.favoriteCount}
            </div>
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {note.favoriteCount}
          </UserActions>
        )}
      </MetaData>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </StyledNote>
  );
};
export default Note;
