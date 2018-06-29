import React from 'react';
import StyledMessage from './style';

const Message = ({ text, buttonClickHandler, buttonName }) => (
  <StyledMessage>
    <span>{text}</span>
    <a onClick={buttonClickHandler} className="waves-effect waves-light btn-small">
      {buttonName}
    </a>
  </StyledMessage>
);

export default Message;
