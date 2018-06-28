import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledContainer } from './style';

const NavBar = ({ clickHandler, buttonName }) => (
  <div className="navbar-fixed">
    <nav>
      <StyledContainer className="indigo lighten-4 row">
        <div className="col s10">
          <Link to="/" className="bran-logof-center">MY FEED</Link>
        </div>
        <StyledDiv className="col s2">
          <a onClick={clickHandler} className="waves-effect waves-light btn-small">
            {buttonName}
          </a>
        </StyledDiv>
      </StyledContainer>
    </nav>
  </div>
);

export default NavBar;
