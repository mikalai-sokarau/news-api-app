import React from 'react';
import NewSingle from '../../components/SingleNews';
import Message from '../Message';

const FavoriteNews = ({
  news,
  buttonName,
  messageText,
  iconClickHandler,
  buttonClickHandler
}) => (
  <div className="row">
    {news.length ? (
      news.map(item => (
        <NewSingle
          key={item.data.url}
          item={item.data}
          removeNewsFromFavorite={iconClickHandler}
          checked
        />
      ))
    ) : (
      <Message
        text={messageText}
        buttonClickHandler={buttonClickHandler}
        buttonName={buttonName}
      />
    )}
  </div>
);

export default FavoriteNews;
