import React, { Component } from "react";
import News from "./News";
import SideNews from "./SideNews";

export class App extends Component {
  state = {
    news1: {
      type: "top-headlines",
      query: "sources=cnn"
    },
    news2: {
      type: "everything",
      query: "domains=comicbookmovie.com&language=en"
    },
    isFavoriteShow: false,
  };

  favoriteNewsClickHandler = () => {
    this.setState({
      isFavoriteShow: !this.state.isFavoriteShow
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4 row">
              <div className="col s9">
                <a href="/" className="bran-logo-center">
                  MY FEED
                </a>
              </div>
              <div className="col s3">
                <label>
                  <input type="checkbox" className="filled-in" onClick={this.favoriteNewsClickHandler} />
                  <span>Show favorite news</span>
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
