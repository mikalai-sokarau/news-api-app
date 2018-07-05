import React from 'react';

const SingleImage = ({ url, fullSizeUrl, tags, user }) => {
  return (
    <div className="col s4">
      <div className="card small hoverable">
        <div className="card-image">
          <a href={fullSizeUrl} target="_blank">
            <img src={url} alt={tags} />
          </a>
          <span className="card-title">{user}</span>
        </div>
        <div className="card-content">
          <span className="teal-text">Tags:</span>
          <p> {tags}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
