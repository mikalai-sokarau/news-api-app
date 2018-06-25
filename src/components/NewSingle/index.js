import React from "react";
import Star from 'react-icons/lib/fa/star';
import styled from 'styled-components';

const StyledStar = styled(Star)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.8rem;
  opacity: 0.6;
  color: aliceblue;
`;

const NewSingle = ({ item }) => (
  <div className="col s4 hoverable">
    <div className="card small">
      <div className="card-image" style={{ position: 'relative' }}>
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
        <StyledStar title="Add to favorite" />
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">FULL ARTICLE</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
