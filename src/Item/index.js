// Item.js
import React from 'react';
import './Item.css'; // Import CSS file for Item component

const Item = (props) => {
    const { item } = props;
    const { name, imageUrl, Marks } = item;
    return (
        <li className="item">
            <img className="item-image" src={imageUrl} alt="img" />
            <div className="item-details">
                <p className="item-name">{name}</p>
                <p className="item-marks">{Marks}</p>
            </div>
        </li>
    );
};

export default Item;
