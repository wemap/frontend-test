
import React from 'react';
import '../index.css';

  const ContentList = ({ content }) => {

    return (
      <div>
        {content && content.map((item) => (
          <div key={item.id} className="content-item">
            <div className="logo-container">
              <img src={item.image_url} alt={item.address} className="logo" />
            </div>
            <div className="info-container">
              <p className="name">{item.author.name}</p>
              <p className="address">{item.address}</p>
            </div>
            <div className="link-container">
              <a href={`https://livemap.getwemap.com/#/pinpoints/${item.id}`}>Voir sur la carte</a>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default ContentList;