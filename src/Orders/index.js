import React from 'react'; // Importing React library
import './index.css'; // Importing CSS file for styling

// Orders component
const Orders = () => {
    return (
        <div className="orders-container"> {/* Container for orders */}
            <div className="order-card"> {/* Individual order card */}
                <div className="order-details"> {/* Container for order details */}
                    <h1>ORDER #1239</h1> {/* Order number */}
                    <p>Product: NEET BIOLOGY</p> {/* Product name */}
                    <p>Date: 10/4/2024</p> {/* Order date */}
                    <p>Address: R107, AJMERA INFINITY, <br/> KARUNA NAGAR, ELECTRONIC CITY, <br/> BANGALORE, INDIA PIN: 846009</p> {/* Shipping address */}
                </div>
                <div className="order-actions"> {/* Container for order actions */}
                    <button className="action-button">VIEW DETAILS</button> {/* View details button */}
                    <button className="action-button">TRACK ORDER</button> {/* Track order button */}
                    <button className="action-button">DOWNLOAD INVOICE</button> {/* Download invoice button */}
                </div>
            </div>
            <div className="order-card"> {/* Another individual order card */}
                <div className="order-details"> {/* Container for order details */}
                    <h1>ORDER #1238</h1> {/* Order number */}
                    <p>Product: NEET PHYSICS</p> {/* Product name */}
                    <p>Date: 10/6/2024</p> {/* Order date */}
                    <p>Address: R107, AJMERA INFINITY, <br/> KARUNA NAGAR, ELECTRONIC CITY, <br/> BANGALORE, INDIA PIN: 846009</p> {/* Shipping address */}
                </div>
                <div className="order-actions"> {/* Container for order actions */}
                    <button className="action-button">VIEW DETAILS</button> {/* View details button */}
                    <button className="action-button">TRACK ORDER</button> {/* Track order button */}
                    <button className="action-button">DOWNLOAD INVOICE</button> {/* Download invoice button */}
                </div>
            </div>
        </div>
    );
}

export default Orders; // Exporting Orders component
