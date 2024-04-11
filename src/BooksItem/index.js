import "./index.css";

const BooksItem = (props) => {
    const { item } = props;
    const { name, price, imageUrl, description } = item;
    return (
        <li className="books-item">
            <h1 className="book-title">{name}</h1>
            <img className="book-image" src={imageUrl} alt="book" />
            <p className="book-price">{price}</p>
            <p className="book-description">{description}</p>
            <button className="add-to-cart-button ">ADD TO CART</button>
            <hr className="divider" />
        </li>
    );
}

export default BooksItem;
