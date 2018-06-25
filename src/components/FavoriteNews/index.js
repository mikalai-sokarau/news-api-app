import React from "react";
import NewSingle from "../../components/NewSingle";

const FavoriteNews = props => {
  const renderNews = () =>
    props.news.map(item => (
      <NewSingle
        key={item.data.url}
        item={item.data}
        removeNewsFromFavorite={props.removeNewsFromFavorite}
        checked
      />
    ));

  return (
    <div className="col s12">
      <div className="row">{renderNews()}</div>
    </div>
  );
};

export default FavoriteNews;
