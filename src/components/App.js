import React, { Component } from "react";

import News from "./News";
import SideNews from "./SideNews";

export class App extends Component {
  state = {
    news1: {
      type: "top-headlines",
      query: "sources=bbc-news"
    },
    news2: {
      type: "everything",
      query: "domains=comicbookmovie.com&language=en"
    },
    isFavoriteNewsChecked: false,
  };

  checkBoxHandler = () => {
    this.setState({
      isFavoriteNewsChecked: !this.state.isFavoriteNewsChecked
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4 row">
              <div className="col s2">
                <a href="/" className="bran-logo-center">
                  MY FEED
                </a>
              </div>
              <div className="col s3">
                <div className="input-field col s12">
                  <select>
                    <option defaultValue="" disabled >Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  {/* <label>Materialize Select</label> */}
                </div>
              </div>
              <div className="col s4"></div>
              <div className="col s3">
                <label>
                  <input type="checkbox" onClick={this.checkBoxHandler} className="filled-in" />
                  <span>Show farorite</span>
                </label>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News source={this.state.news1} />
          </div>
          <div className="col s4">
            <SideNews source={this.state.news2} />
          </div>
        </div>
      </div>
    );
  }
}
