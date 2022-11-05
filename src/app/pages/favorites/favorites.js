import React from 'react';
import { useQuery } from '@apollo/client';
import * as API from '../../api';
import * as C from '../../components';

const Favorites = () => {
  const { data, loading, error } = useQuery(API.GET_FAVORITES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  if (data.me.favoriteNotes.length !== 0) {
    return <C.NoteFeed notes={data.me.favoriteNotes} linkToNote="../note" />;
  } else {
    return <div>No favorites yet</div>;
  }
};

export default Favorites;
