// ClassesItem.js

import React from 'react';
import './index.css';

const ClassesItem = ({ item }) => {
  return (
    <li className="classes-item">
        <div className="video-con">
      <div className="video-container">
        <iframe
          className="video videoCon"
          src={`https://www.youtube.com/embed/${item.videoUrl}`}
          title={item.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="class-details">
        <h2 className="class-title">{item.name}</h2>
        <p className="class-description">{item.description}</p>
        <button className="btn">Practice</button>
      </div>
      </div>
      <hr className="divider" />
    </li>
  );
};

export default ClassesItem;
