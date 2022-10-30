import React from 'react';
import logo from '../../../../assets/logo.svg';
import styled from 'styled-components';
import * as D from '../../../../duck';
import LinkButton from '../../../link-button';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  padding-left: 0.5em;
  display: inline;
`;
const UserState = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const { data, client } = useQuery(D.IS_LOGGED_IN);
  const navigate = useNavigate();

  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UserState>
        {data.isLoggedIn && (
          <LinkButton
            onClick={() => {
              localStorage.removeItem('token');
              client.resetStore();
              client.writeQuery({
                query: D.IS_LOGGED_IN,
                data: {
                  isLoggedIn: false,
                },
              });
              navigate('/sign-in');
            }}
          >
            Log Out
          </LinkButton>
        )}
      </UserState>
    </HeaderBar>
  );
};
export default Header;
