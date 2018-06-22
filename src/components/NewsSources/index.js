import React from "react";
import { Link } from "react-router-dom";
import { NEWS_SOURCES } from "../../common/constants";
import { PropTypes } from "prop-types";

const DEFAULT_NEWS = NEWS_SOURCES[0];

const NewsSources = ({ source = DEFAULT_NEWS.shortName }) => (
  <div className="collection">
    {NEWS_SOURCES.map(item => createLink(item, source))}
  </div>
);

function createLink(item, source) {
  const active = source === item.shortName ? "active" : "";

  const linkClassName = `collection-item ${active}`;

  return (
    <Link
      to={{ pathname: `/${item.shortName}` }}
      key={item.name}
      className={linkClassName}
    >
      {item.name}
    </Link>
  );
}

NewsSources.propTypes = {
  source: PropTypes.string
};

export default NewsSources;
