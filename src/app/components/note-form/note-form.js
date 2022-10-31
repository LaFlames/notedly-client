import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  padding: 10px 10px;
`;

const NoteForm = ({ content, onSubmit, isError, isLoading }) => {
  const [value, setValue] = useState({ content: content || '' });

  console.log(value);

  const onChange = (event) => {
    setValue({
      ...value,

      [event.target.name]: event.target.value,
    });
  };
  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              ...value,
            },
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit" disabled={isLoading}>
          Save
        </Button>
      </Form>
    </Wrapper>
  );
};
export default NoteForm;
