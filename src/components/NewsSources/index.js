import React from 'react';
import NewsSourcesLink from '../NewsSourcesLink';
import { NEWS_SOURCES } from '../../common/constants';

const DEFAULT_NEWS = NEWS_SOURCES[0];

const NewsSources = ({ source = DEFAULT_NEWS.shortName }) => (
  <div className="collection">
    {NEWS_SOURCES.map(item => (
      <NewsSourcesLink key={item.name} item={item} source={source} />
    ))}
  </div>
);

export default NewsSources;
