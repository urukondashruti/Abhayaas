import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const BooksItem = (props) => {
    const { item } = props;
    const { name, price, imageUrl, description } = item;
    return (
        <li>
            <div className="books-item">
            <div>
                <img className="book-image" src={imageUrl} alt="book" />
             </div>
             <div className="books-text">
            <h1 className="book-title">{name}</h1>
            <p className="book-price"><span> <FontAwesomeIcon icon={faRupeeSign} className="rs-icon" /></span>{price}</p>
            <p className="book-description">{description}</p>
            <button className="add-to-cart-button ">ADD TO CART</button>
            </div>
            </div>
            <hr className="divider" />
        </li>
    );
}

export default BooksItem;
