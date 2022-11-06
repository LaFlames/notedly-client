import React from 'react';

const TextInput = ({
  required,
  type,
  name,
  id = name,
  placeholder = name,
  onChange,
  hasLabel,
  labelText,
}) => {
  return (
    <div>
      {hasLabel && <label htmlFor={name}>{labelText}</label>}
      <input
        required={required}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={false}
      />
    </div>
  );
};

export default TextInput;
