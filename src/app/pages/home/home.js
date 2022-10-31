import React from 'react';
import { useQuery } from '@apollo/client';
import * as LD from './duck';
import * as C from '../../components';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(LD.GET_NOTES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <>
      <C.NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <C.Button
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.noteFeed.cursor,
              },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    notes: [
                      ...prevResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes,
                    ],
                    __typename: 'noteFeed',
                  },
                };
              },
            })
          }
        >
          Load more
        </C.Button>
      )}
    </>
  );
};

export default Home;
