import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper indigo lighten-4 row">
        <div className="col s9">
          <a href="/" className="bran-logo-center">
            MY FEED
          </a>
        </div>
        <div className="col s3">
          <Link to="/favorite">
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Show favorite news</span>
            </label>
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
