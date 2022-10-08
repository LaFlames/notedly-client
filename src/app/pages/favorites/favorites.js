import React from 'react';

const Favorites = () => {
  React.useEffect(() => {
    document.title = 'Favorites';
  }, []);

  return (
    <div>
      <h1>Notedly</h1>
      <p>These are my favorites</p>
    </div>
  );
};

export default Favorites;
