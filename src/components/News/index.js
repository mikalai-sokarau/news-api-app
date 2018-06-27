import React from 'react';
import NewSingle from '../../components/SingleNews';
import Error from './../../components/Error/index';

const News = ({ news, favoriteNewsKeys, addNewsToFavorite, removeNewsFromFavorite }) => (
  <div className="col s8">
    <Error>
      <div>
        {news.map(item => (
          <NewSingle
            key={item.url}
            item={item}
            checked={favoriteNewsKeys[item.url]}
            addNewsToFavorite={addNewsToFavorite}
            removeNewsFromFavorite={removeNewsFromFavorite}
          />
        ))}
      </div>
    </Error>
  </div>
);

export default News;
