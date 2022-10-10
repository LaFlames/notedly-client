import React from 'react';

const Favorites = () => {
  React.useEffect(() => {
    document.title = 'Favorites';
  }, []);

  return (
    <div>
      <p>These are my favorites</p>
    </div>
  );
};

export default Favorites;
