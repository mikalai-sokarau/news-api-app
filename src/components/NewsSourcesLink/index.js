import React from 'react';
import { Link } from 'react-router-dom';

const NewsSourcesLink = ({ item, source }) => (
  <Link
    to={{ pathname: `/${item.shortName}` }}
    className={`collection-item ${source === item.shortName ? 'active' : ''}`}
  >
    {item.name}
  </Link>
);

export default NewsSourcesLink;
