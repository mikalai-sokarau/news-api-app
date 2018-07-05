import React from 'react';

const Input = ({ onChangeHandler, placeholder }) => (
  <div className="input-field">
    <input
      onChange={({ target: { value } }) => onChangeHandler(value)}
      placeholder={placeholder}
      type="text"
      className="validate"
    />
  </div>
);

export default Input;
