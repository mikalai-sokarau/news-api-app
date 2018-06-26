import React from "react";
import { ThemeProvider } from "styled-components";
import { standart, favorite, StyledStar } from "./style";

const NewSingle = props => {
  const isStarCkecked = props.checked;
  const clickHandler = isStarCkecked
    ? props.removeNewsFromFavorite
    : props.addNewsToFavorite;
  const providerTheme = isStarCkecked ? favorite : standart;

  return (
    <div className="col s4 hoverable">
      <div className="card small">
        <div className="card-image" style={{ position: "relative" }}>
          <img src={props.item.urlToImage} alt={props.item.title} />
          <span className="card-title">{props.item.source.name}</span>
          <ThemeProvider theme={providerTheme}>
            <StyledStar
              title="Add to favorite"
              onClick={() => {
                clickHandler({
                  data: props.item,
                  id: props.item.url
                });
              }}
            />
          </ThemeProvider>
        </div>
        <div className="card-content">
          <p>{props.item.title}</p>
        </div>
        <div className="card-action">
          <a href={props.item.url} target="_blank">
            FULL ARTICLE
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewSingle;
