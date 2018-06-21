import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { NEWS_SOURCES } from "../../common/constants";

class NewsSources extends PureComponent {
  renderNewsSources = () => {
    const source = this.props.source || NEWS_SOURCES[0].name;

    return NEWS_SOURCES.map(item => (
      <Link
        to={{ pathname: `/${item.shortName}` }}
        key={item.name}
        className={
          source === item.shortName
            ? "collection-item active"
            : "collection-item"
        }
      >
        {item.name}
      </Link>
    ));
  };

  render = () => <div className="collection">{this.renderNewsSources()}</div>;
}

export default NewsSources;
