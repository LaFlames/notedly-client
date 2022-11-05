import React from 'react';
import { useMutation } from '@apollo/client';
import * as API from '../../../../api';
import NonFavorite from '../../../../assets/star-unactive.svg';
import Favorite from '../../../../assets/star-active.svg';

const MakeFavorite = ({ me, id, favoriteCount }) => {
  const [count, setCount] = React.useState(favoriteCount);

  const [favorited, setFavorited] = React.useState(
    me.favoriteNotes.filter((note) => note.id === id).length > 0
  );

  const [toggleFavorite] = useMutation(API.TOGGLE_FAVORITE, {
    variables: {
      id,
    },
    refetchQueries: [
      { query: API.GET_FAVORITES },
      { query: API.GET_MY_NOTES },
      { query: API.GET_NOTES },
    ],
  });

  return (
    <div style={{ marginTop: 20 }}>
      <img
        src={favorited ? Favorite : NonFavorite}
        style={{ cursor: 'pointer', width: '25px' }}
        alt="Make it favorite!"
        onClick={() => {
          if (favorited) {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          } else {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }
        }}
      />
      {count > 0 && <span style={{ fontSize: '14px' }}>{count}</span>}
    </div>
  );
};
export default MakeFavorite;
