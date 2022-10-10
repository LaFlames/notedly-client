import React from 'react';
import { Outlet } from 'react-router-dom';
import * as LC from './components';

const Layout = () => {
  return (
    <>
      <LC.Header />
      <div className="wrapper">
        <LC.Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
