import React, { useState } from "react";
import Header from '../Header';
import Footer from '../Footer';
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Card = () => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseCheckoutModal = () => setShowCheckoutModal(false);
  const handleShowCheckoutModal = () => setShowCheckoutModal(true);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  return (
    <div>
         <Header/>
    <div className="container2">
      <div className="card">
        <div className="checkout-section">
          <h1 className="total">TOTAL Rs 2000</h1>
          <button className="checkout-btn" onClick={handleShowCheckoutModal}>
            CHECKOUT
          </button>
        </div>
        <hr />
        <Modal show={showCheckoutModal} onHide={handleCloseCheckoutModal}>
          <Modal.Header closeButton>
            <Modal.Title>Please Provide Your Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="address-input w-100" />
          </Modal.Body>
          <Modal.Footer className="FooterCon">
            <Button variant="secondary" className="footerBut" onClick={handleCloseCheckoutModal}>
              Cancel
            </Button>
            <Button variant="primary" className="footerBut" onClick={handleCloseCheckoutModal}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="info-section">
          <div>
            <h1 className="title">What is DNA?</h1>
            <p className="module-info">Module: DNA</p>
            <p className="date-info">Date:10/04/24</p>
          </div>
          <div>
            <button className="action-btn">
              One <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <button className="action-btn" onClick={handleShowDeleteModal}>
              DELETE
            </button>
          </div>
        </div>
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Delete book from cart?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
          <Modal.Footer className="FooterCon">
            <Button  className="click-btn" onClick={handleCloseDeleteModal}>
              Cancel
            </Button>
            <Button  className="click-btn" onClick={handleCloseDeleteModal}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Card;
