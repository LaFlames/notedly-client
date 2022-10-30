import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    background-color: #005fa3;
  }
  :disabled {
    background-color: lightgray;
  }
`;
export default Button;
