import React from 'react';
import SingleSideNews from '../SingleSideNews';
import Error from '../Error';

const SideNews = ({ sideNews }) => (
  <Error>
    <div>
      {sideNews.map(item => (
        <SingleSideNews key={item.url} url={item.url} title={item.title} />
      ))}
    </div>
  </Error>
);

export default SideNews;
