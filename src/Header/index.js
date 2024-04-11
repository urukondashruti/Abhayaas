import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.css'; // Import your CSS file

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" variant="light" className="navContainer">
          <Container className="navContainer">
              <Navbar.Brand href="#home">Karo Abhayass</Navbar.Brand>
              <Navbar.Toggle className="size"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto margin">
                      <Nav.Link href="#join" className="nav-link"><button className="joinButton">JOIN US</button></Nav.Link>
                      <Nav.Link href="/classes" className="nav-link">Classes</Nav.Link>
                      <Nav.Link href="/products" className="nav-link">Products</Nav.Link>
                      <Nav.Link href="/about" className="nav-link">About Us</Nav.Link>
                      <Nav.Link href="/login" className="nav-link"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                      <Nav.Link href="/carts" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default Header;
