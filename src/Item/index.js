// Import necessary dependencies and styles
import React from 'react';
import './index.css'; // Import CSS file for styling the Item component

// Item component
const Item = (props) => {
    // Destructure the props to extract the 'item' object
    const { item } = props;
    // Destructure the 'item' object to extract its properties
    const { name, imageUrl, Marks } = item;

    // Render the item details
    return (
        <li className="item"> {/* Container for each item */}
            <img className="item-image" src={imageUrl} alt="img" /> {/* Image of the item */}
            <div className="item-details"> {/* Container for item details */}
                <p className="item-name">{name}</p> {/* Name of the item */}
                <p className="item-marks">{Marks}</p> {/* Marks of the item */}
            </div>
        </li>
    );
};

export default Item; // Export the Item component

