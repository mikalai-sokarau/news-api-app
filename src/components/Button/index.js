import React from 'react';

const Button = ({ clickHandler, buttonName }) => (
  <a onClick={clickHandler} className="waves-effect waves-light btn-small">
    {buttonName}
  </a>
);

export default Button;
