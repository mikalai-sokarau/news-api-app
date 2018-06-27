import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledContainer } from "./style";

const NavBar = ({ history, location }) => {
  const buttonText =
    location.pathname === "/favorite" ? "BACK" : "Favorite news";
  const clickHandler = () => {
    return location.pathname === "/favorite"
      ? () => history.goBack()
      : () => history.push("/favorite");
  };

  return (
    <div className="navbar-fixed">
      <nav>
        <StyledContainer className="indigo lighten-4 row">
          <div className="col s10">
            <Link to="/" className="bran-logo-center">
              MY FEED
            </Link>
          </div>
          <StyledDiv className="col s2">
            <a
              onClick={clickHandler()}
              className="waves-effect waves-light btn-small"
            >
              {buttonText}
            </a>
          </StyledDiv>
        </StyledContainer>
      </nav>
    </div>
  );
};

export default NavBar;
