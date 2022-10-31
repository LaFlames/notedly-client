import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import * as C from '../../components';
import * as LD from './duck';
import { GET_NOTES } from '../home/duck/operations';

const CreateNote = () => {
  const navigate = useNavigate();
  const [addNote, { loading }] = useMutation(LD.CREATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
    onCompleted: ({ addNote }) => {
      navigate(`/note/${addNote.id}`);
    },
  });

  return <C.NoteForm onSubmit={addNote} isLoading={loading} />;
};

export default CreateNote;
