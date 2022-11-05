import React from 'react';
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import * as API from '../../../../api';
import LinkButton from '../../../link-button';

const Delete = ({ id }) => {
  const { id: idFromParams } = useParams();
  const navigate = useNavigate();
  const [deleteNote, { loading: isDeleting }] = useMutation(API.DELETE_NOTE, {
    variables: { id },
    refetchQueries: [{ query: API.GET_MY_NOTES }, { query: API.GET_NOTES }],
    onCompleted: () => {
      if (idFromParams) {
        navigate('../../my-notes');
      }
    },
  });

  return (
    <LinkButton
      style={{ textDecoration: 'none', color: '#d1483f' }}
      onClick={deleteNote}
      disabled={isDeleting}
    >
      Delete
    </LinkButton>
  );
};
export default Delete;
