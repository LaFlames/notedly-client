import React from 'react';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import * as API from '../../api';
import * as LC from './components';

const StyledNote = styled.article`
  max-width: 100%;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
    justify-content: space-between;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
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
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </MetaInfo>

        {data.isLoggedIn && userData.me.id === note.author.id ? (
          <UserActions>
            <div>
              <NavLink
                style={{
                  marginRight: '10px',
                  textDecoration: 'none',
                  color: '#8c6223',
                }}
                to={`/edit/${note.id}`}
              >
                Edit
              </NavLink>
              <LC.Delete id={note.id} />
            </div>
            <LC.MakeFavorite
              me={userData.me}
              id={note.id}
              favoriteCount={note.favoriteCount}
            />
          </UserActions>
        ) : (
          <UserActions>
            <LC.MakeFavorite
              me={userData.me}
              id={note.id}
              favoriteCount={note.favoriteCount}
            />
          </UserActions>
        )}
      </MetaData>
    </StyledNote>
  );
};
export default Note;
