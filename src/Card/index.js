import { Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";
import "./index.css";

const Card = () => {
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseCheckoutModal = () => setShowCheckoutModal(false);
    const handleShowCheckoutModal = () => setShowCheckoutModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    return (
        <div className="con">
            <div className="card">
                <div className="checkCon">
                <h1 className="total">TOTAL Rs 2000</h1>
                <button className="checkout-btn" onClick={handleShowCheckoutModal}>CHECKOUT</button>
                </div>
                <Modal show={showCheckoutModal} onHide={handleCloseCheckoutModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Provide Your Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><textArea className="w-100" col="500" row="20"/></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseCheckoutModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCloseCheckoutModal}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="checkCon">
                    <div>
                <h1 className="title">what is DNA?</h1>
                <p className="info">Module: DNA</p>
                <p className="info">Date:10/04/24</p>
                </div>
                <div>
                <button className="action-btn">One</button>
                <button className="action-btn" onClick={handleShowDeleteModal}>DELETE</button>
                </div>
                </div>
                <div>
                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete book from cart?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDeleteModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCloseDeleteModal}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                </div>
            </div>
    );
}

export default Card;
