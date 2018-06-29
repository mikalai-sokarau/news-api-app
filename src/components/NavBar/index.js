import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledContainer } from './style';
import { StyledGlobe } from './style';
import Button from '../Button';

const NavBar = ({ clickHandler, buttonName }) => (
  <div className="navbar-fixed">
    <nav>
      <StyledContainer className="indigo lighten-4 row">
        <div className="col s10">
          <Link to="/" className="bran-logof-center">
            MY FEED
          </Link>
          <Link to="/map"><StyledGlobe></StyledGlobe></Link>
        </div>
        <StyledDiv className="col s2">
          <Button clickHandler={clickHandler} buttonName={buttonName} />
        </StyledDiv>
      </StyledContainer>
    </nav>
  </div>
);

export default NavBar;
