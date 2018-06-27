import React from 'react';
import SingleSideNews from '../../components/SingleSideNews';
import Error from './../../components/Error/index';

const SideNews = ({ sideNews }) => (
  <Error>
    <div>{sideNews.map(item => <SingleSideNews key={item.url} item={item} />)}</div>
  </Error>
);

export default SideNews;
