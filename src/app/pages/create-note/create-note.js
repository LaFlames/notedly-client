import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import * as C from '../../components';
import * as API from '../../api';

const CreateNote = () => {
  const navigate = useNavigate();
  const [addNote, { loading }] = useMutation(API.CREATE_NOTE, {
    refetchQueries: [{ query: API.GET_NOTES }, { query: API.GET_MY_NOTES }],
    onCompleted: ({ addNote }) => {
      navigate(`/note/${addNote.id}`);
    },
  });

  return <C.NoteForm onSubmit={addNote} isLoading={loading} />;
};

export default CreateNote;
