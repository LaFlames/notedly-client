import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import * as C from '../../components';
import * as API from '../../api';

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data,
    loading: noteLoading,
    error,
  } = useQuery(API.GET_NOTE, {
    variables: { id },
  });

  const { data: userdata, loading: userLoading } = useQuery(API.GET_ME);

  const [editNote, { loading }] = useMutation(API.EDIT_NOTE, {
    variables: {
      id,
    },
    refetchQueries: [{ query: API.GET_NOTES }, { query: API.GET_MY_NOTES }],
    onCompleted: () => {
      navigate(`/note/${id}`);
    },
  });

  if (noteLoading || userLoading) return <div>Loading...</div>;

  if (userdata.me.id !== data.note.author.id) {
    return <p>You do not have access to edit this note.</p>;
  }

  if (error) return <div>Error!</div>;

  return (
    <C.NoteForm
      onSubmit={editNote}
      isLoading={loading}
      content={data.note.content}
    />
  );
};

export default EditNote;
