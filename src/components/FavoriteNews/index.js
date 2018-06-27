import React from "react";
import NewSingle from "../../components/SingleNews";
import StyledMessage from "./style";

const FavoriteNews = ({ news, removeNewsFromFavorite, history }) => {
  const renderNews = () =>
    news.map(item => (
      <NewSingle
        key={item.data.url}
        item={item.data}
        removeNewsFromFavorite={removeNewsFromFavorite}
        checked
      />
    ));

  const emptyFavoriteNewsMessage = (
    <StyledMessage>
      <span>There are no favorite news yet. First add a few from</span>
      <a
        onClick={() => history.goBack()}
        className="waves-effect waves-light btn-small"
      >
        Home
      </a>
    </StyledMessage>
  );

  return (
    <div className="row">
      {news.length ? renderNews() : emptyFavoriteNewsMessage}
    </div>
  );
};

export default FavoriteNews;
