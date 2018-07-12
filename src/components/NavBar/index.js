import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledContainer } from './style';
import Button from '../Button';

const NavBar = ({ clickHandler, buttonName }) => (
  <div className="navbar-fixed">
    <nav>
      <StyledContainer className="indigo lighten-4 row">
        <div className="col s10">
          <ul>
            <li>
              <Link to="/" className="bran-logof-center">
                MY FEED
              </Link>|
            </li>
            <li>
              <Link to="/images"> IMAGES </Link>|
            </li>
            <li>
              <Link to="/map">MAP</Link>
            </li>
          </ul>
        </div>
        <StyledDiv className="col s2">
          <Button clickHandler={clickHandler} buttonName={buttonName} />
        </StyledDiv>
      </StyledContainer>
    </nav>
  </div>
);

export default NavBar;
