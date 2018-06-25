import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const buttonText =
    props.location.pathname === "/favorite" ? "Home" : "Favorite news";
  const buttonLink =
    props.location.pathname === "/favorite" ? "/" : "/favorite";
  
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
            <Link
              to={buttonLink}
              className="waves-effect waves-light btn-small"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
