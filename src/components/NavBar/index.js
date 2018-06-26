import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const buttonText =
    props.location.pathname === "/favorite" ? "BACK" : "Favorite news";
  const clickHandler = () => {
    return props.location.pathname === "/favorite"
      ? () => props.history.goBack()
      : () => props.history.push("/favorite");
  };

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper indigo lighten-4 row">
          <div className="col s10">
            <Link to="/" className="bran-logo-center">
              MY FEED
            </Link>
          </div>
          <div className="col s2">
            <a
              onClick={clickHandler()}
              className="waves-effect waves-light btn-small"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
