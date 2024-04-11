import React from 'react';
import './index.css';

const Item = (props) => {
    const { item } = props;
    const { name, imageUrl, Marks } = item;
    return (
        <li className="item">
            <img src={imageUrl} alt="img" />
            <div>
                <p className="name">{name}</p>
                <p className="marks">{Marks}</p>
            </div>
        </li>
    );
};

export default Item;