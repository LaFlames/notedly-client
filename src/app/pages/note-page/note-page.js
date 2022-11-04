import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import * as API from '../../api';
import * as C from '../../components';

const NotePage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(API.GET_NOTE, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return <C.Note note={data.note} />;
};
export default NotePage;
