import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import * as API from '../../../../api';

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  margin-top: 20px;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navigation = () => {
  const { pathname } = useLocation();
  const paths = [
    { title: 'Home', to: '/' },
    { title: 'My Notes', to: '/my-notes' },
    { title: 'Favorites', to: '/favorites' },
  ];
  const { data } = useQuery(API.GET_ME);

  return (
    <Nav>
      <div style={{ fontSize: '20px', fontStyle: 'italic' }}>
        Hello, {data?.me?.username}!
      </div>
      <NavList>
        {paths.map((path) => {
          const isActiveLink = pathname === path.to;

          return (
            <li key={path.to}>
              <NavLink
                to={path.to}
                style={{ color: isActiveLink && '#0077cc' }}
              >
                {path.title}
              </NavLink>
            </li>
          );
        })}
      </NavList>
    </Nav>
  );
};
export default Navigation;
