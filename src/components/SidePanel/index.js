import React from 'react';
import SideNews from '../../containers/SideNews';
import NewsSources from '../NewsSources';

const SidePanel = ({ source, getNewsFrom, sideNews }) => (
  <div className="col s4">
    <NewsSources source={source} />
    <SideNews getNewsFrom={getNewsFrom} sideNews={sideNews} />
  </div>
);

export default SidePanel;
