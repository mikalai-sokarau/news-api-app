import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper indigo lighten-4 row">
        <div className="col s9">
          <Link to="/" className="bran-logo-center">
            MY FEED
          </Link>
        </div>
        <div className="col s3">
          <label>
            <input type="checkbox" className="filled-in" />
            <span>Show favorite news</span>
          </label>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
