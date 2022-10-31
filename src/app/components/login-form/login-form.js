import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import TextInput from '../text-input';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 200px auto;
  border-radius: 10px;
`;
const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
  button {
    align-self: end;
  }
`;

const LoginForm = ({ formType, onSubmit, isError, isLoading }) => {
  const [values, setValues] = React.useState({
    email: 'vetalichegga@gmail.com',
    password: 'qwerty123',
  });
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper
      style={
        isError && {
          borderColor: 'red',
        }
      }
    >
      {formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              ...values,
            },
          });
        }}
      >
        {formType === 'signup' && (
          <TextInput
            required
            type="text"
            name="username"
            onChange={onChange}
            hasLabel
            labelText="Username:"
          />
        )}
        <TextInput
          required
          type="email"
          name="email"
          onChange={onChange}
          hasLabel
          labelText="Email:"
          defaultValue={formType === 'signin' ? values.email : ''}
        />
        <TextInput
          required
          type="password"
          name="password"
          onChange={onChange}
          hasLabel
          labelText="Password:"
          defaultValue={formType === 'signin' ? values.password : ''}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          {formType === 'signup' ? (
            <div>
              <NavLink to="/sign-in">Sign in</NavLink> if you have an account
            </div>
          ) : (
            <div>
              <NavLink to="/sign-up">Sign up</NavLink> if you don't have an
              account
            </div>
          )}
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
      {isError && (
        <p style={{ color: 'red' }}>
          {formType === 'signin' ? 'Error signing in!' : 'Error signing up!'}
        </p>
      )}
    </Wrapper>
  );
};
export default LoginForm;
