import React from "react";
import { ThemeProvider } from "styled-components";
import { standart, favorite, StyledStar } from "./style";

const NewSingle = ({
  checked,
  removeNewsFromFavorite,
  addNewsToFavorite,
  item
}) => (
  <div className="col s4 hoverable">
    <div className="card small">
      <div className="card-image" style={{ position: "relative" }}>
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
        <ThemeProvider theme={checked ? favorite : standart}>
          <StyledStar
            onClick={
              checked
                ? () => removeNewsFromFavorite({ id: item.url })
                : () => addNewsToFavorite({ id: item.url, data: item })
            }
          />
        </ThemeProvider>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">
          FULL ARTICLE
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
