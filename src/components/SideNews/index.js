import React from 'react';
import SingleSideNews from '../SingleSideNews';
import Error from '../../containers/Error';

const SideNews = ({ sideNews }) => (
  <Error>
    <div>{sideNews.map(item => <SingleSideNews key={item.url} item={item} />)}</div>
  </Error>
);

export default SideNews;
