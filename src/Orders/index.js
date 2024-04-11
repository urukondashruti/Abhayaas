import React from 'react';
import './index.css'; // Import CSS file

const Orders = () => {
    return (
        <div className="orders-container">
            <div className="order-card">
                <div className="order-details">
                    <h1>ORDER #1239</h1>
                    <p>Product: NEET BIOLOGY</p>
                    <p>Date: 10/4/2024</p>
                    <p>Address: R107, AJMERA INFINITY, <br/> KARUNA NAGAR, ELECTRONIC CITY, <br/> BANGALORE, INDIA PIN: 846009</p>
                </div>
                <div className="order-actions">
                    <button className="action-button">VIEW DETAILS</button>
                    <button className="action-button">TRACK ORDER</button>
                    <button className="action-button">DOWNLOAD INVOICE</button>
                </div>
            </div>
            <div className="order-card">
                <div className="order-details">
                    <h1>ORDER #1238</h1>
                    <p>Product: NEET PHYSICS</p>
                    <p>Date: 10/6/2024</p>
                    <p>Address: R107, AJMERA INFINITY, <br/> KARUNA NAGAR, ELECTRONIC CITY, <br/> BANGALORE, INDIA PIN: 846009</p>
                </div>
                <div className="order-actions">
                    <button className="action-button">VIEW DETAILS</button>
                    <button className="action-button">TRACK ORDER</button>
                    <button className="action-button">DOWNLOAD INVOICE</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;
