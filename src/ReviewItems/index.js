import "./index.css";

const ReviewItems = (props) => {
    const { item } = props;
    const { imageUrl, description } = item;
    return (
        <li className="review-item">
            <img className="review-item-image" src={imageUrl} alt="img"/>
            <p className="review-item-description">{description}</p>
        </li>
    );
}

export default ReviewItems;
