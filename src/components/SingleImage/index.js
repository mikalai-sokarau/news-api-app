import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../FullScreenImage/style';

const SingleImage = ({ url, tags, user, id }) => (
  <div className="col s4">
    <div className="card small hoverable">
      <div className="card-image">
        <Link to={`images/${id}`}>
          <img src={url} alt={tags} />
        </Link>
        <span className="card-title">{user}</span>
      </div>
      <div className="card-content">
        <span className="teal-text">Tags:</span>
        <p>{tags}</p>
      </div>
    </div>
  </div>
);

export default SingleImage;
