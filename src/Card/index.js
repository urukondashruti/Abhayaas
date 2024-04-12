import React, { useState } from "react"; // Import React library
import Header from '../Header'; // Import Header component
import Footer from '../Footer'; // Import Footer component
import { Button, Modal } from "react-bootstrap"; // Import Button and Modal components from react-bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Import faArrowDown icon from FontAwesome
import "./index.css"; // Import CSS file for styling

// Functional component Card
const Card = () => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false); // State for showing/hiding checkout modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for showing/hiding delete modal

  // Function to handle closing checkout modal
  const handleCloseCheckoutModal = () => setShowCheckoutModal(false);
  // Function to handle showing checkout modal
  const handleShowCheckoutModal = () => setShowCheckoutModal(true);

  // Function to handle closing delete modal
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  // Function to handle showing delete modal
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  return (
    <div>
      <Header /> {/* Render Header component */}
      <div className="container2"> {/* Container for card */}
        <div className="card"> {/* Card */}
          <div className="checkout-section">
            <h1 className="total">TOTAL Rs 2000</h1>
            <button className="checkout-btn" onClick={handleShowCheckoutModal}>
              CHECKOUT
            </button>
          </div>
          <hr />
          {/* Checkout Modal */}
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
          {/* Information Section */}
          <div className="info-section">
            <div>
              <h1 className="title">What is DNA?</h1>
              <p className="module-info">Module: DNA</p>
              <p className="date-info">Date:10/04/24</p>
            </div>
            <div>
              {/* Action buttons */}
              <button className="action-btn">
                One <FontAwesomeIcon icon={faArrowDown} />
              </button>
              <button className="action-btn" onClick={handleShowDeleteModal}>
                DELETE
              </button>
            </div>
          </div>
          {/* Delete Modal */}
          <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete book from cart?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer className="FooterCon">
              <Button className="click-btn" onClick={handleCloseDeleteModal}>
                Cancel
              </Button>
              <Button className="click-btn" onClick={handleCloseDeleteModal}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Card; // Export the Card component
