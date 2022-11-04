import React from 'react';
import { useQuery } from '@apollo/client';
import * as API from '../../api';
import * as C from '../../components';
import { useNavigate } from 'react-router-dom';

const MyNotes = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(API.GET_MY_NOTES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  if (data.me.notes.length !== 0) {
    return (
      <div>
        <C.Button
          style={{ fontSize: '15px' }}
          onClick={() => {
            navigate('../create');
          }}
        >
          Create Note
        </C.Button>
        <div style={{ marginTop: 30 }}>
          <C.NoteFeed notes={data.me.notes} linkToNote="../note" />
        </div>
      </div>
    );
  } else {
    return <p>No notes yet</p>;
  }
};

export default MyNotes;
