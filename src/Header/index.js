// Import necessary dependencies and styles
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import components from react-bootstrap
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for client-side routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import icons from FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import CSS file for styling

// Header component
const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" variant="light" className="navContainer"> {/* Navbar component with Bootstrap classes */}
          <Container className="navContainer"> {/* Container for the Navbar */}
              <Navbar.Brand href="#home">Karo Abhayass</Navbar.Brand> {/* Navbar brand */}
              <Navbar.Toggle className="size"/> {/* Toggle button for collapsing the Navbar on smaller screens */}
              <Navbar.Collapse id="responsive-navbar-nav"> {/* Collapsible Navbar content */}
                  <Nav className="ml-auto margin"> {/* Navbar items aligned to the right */}
                      {/* Link to join page */}
                      <Nav.Link href="#join" className="nav-link"><button className="joinButton">JOIN US</button></Nav.Link>
                      {/* Link to classes page */}
                      <Nav.Link href="/classes" className="nav-link pt-3">Classes</Nav.Link>
                      {/* Link to products page */}
                      <Nav.Link href="/products" className="nav-link pt-3">Products</Nav.Link>
                      {/* Link to about page */}
                      <Nav.Link href="/about" className="nav-link pt-3">About Us</Nav.Link>
                      {/* Link to login page with user icon */}
                      <Nav.Link href="/login" className="nav-link pt-3"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                      {/* Link to carts page with shopping cart icon */}
                      <Nav.Link href="/carts" className="nav-link pt-3"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default Header; // Export the Header component
