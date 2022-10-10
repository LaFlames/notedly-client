import React from 'react';

const MyNotes = () => {
  React.useEffect(() => {
    document.title = 'My Notes';
  }, []);

  return (
    <div>
      <p>These are my notes</p>
    </div>
  );
};

export default MyNotes;
