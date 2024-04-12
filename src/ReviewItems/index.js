import "./index.css"; // Importing CSS styles for the component

// Functional component ReviewItems
const ReviewItems = (props) => {
    // Destructuring props to extract item
    const { item } = props;
    // Destructuring item to extract imageUrl and description
    const { imageUrl, description } = item;

    // Rendering list item with image and description
    return (
        <li className="review-item"> {/* Container for review item */}
            {/* Image element with source from imageUrl */}
            <img className="review-item-image" src={imageUrl} alt="img"/>
            {/* Paragraph element to display description */}
            <p className="review-item-description">{description}</p>
        </li>
    );
}

export default ReviewItems; // Exporting ReviewItems component
