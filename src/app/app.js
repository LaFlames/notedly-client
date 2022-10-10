import React from 'react';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';
import * as D from './duck';

const App = () => {
  return (
    <>
      <D.GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
