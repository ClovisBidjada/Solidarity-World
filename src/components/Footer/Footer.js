import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from '../../assets/img/logo.png'
import '../../assets/styles/Footer.css';



function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className='Contain'>
        <Row>
          <Col lg={4}>
            <Navbar.Brand href="#">
              <img src={logo} width="200" height="100" className="d-inline-block align-top" alt="Logo" />
            </Navbar.Brand>
            <p className='mt-4 text-1'></p>
            <p className="mt-3 text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dui sit amet ante bibendum sodales.</p>
            </Col>
          <Col className='footer-option' lg={8}>
            <Row className='footer-menu'>
              <Col className='menu-1' md={4}>
                <Nav className=" flex-column">
                  <Nav.Link className='' href="#">Accueil</Nav.Link>
                  <Nav.Link className='' href="#">Projets</Nav.Link>
                  <Nav.Link className='' href="#">Avantages</Nav.Link>
                  <Nav.Link className='' href="#">Contact</Nav.Link>
                </Nav>
              </Col>
              <Col className='menu-2' md={4}>
                <Nav className="flex-column">
                  <Nav.Link className='' href="#">Blog</Nav.Link>
                  <Nav.Link className='' href="#">Produits</Nav.Link>
                  <Nav.Link className='' href="#">FAQ</Nav.Link>
                </Nav>
              </Col>
              <Col className='menu-3' md={4}>
                <Nav className="flex-column">
                  <Nav.Link className='' href="#">Conditions d'utilisation</Nav.Link>
                  <Nav.Link className='' href="#">Politique de confidentialité</Nav.Link>
                  <Nav.Link className='' href="#">Mentions légales</Nav.Link>
                </Nav>
                <Nav className="m-auto">
                  <Nav.Link href="#facebook"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                  <Nav.Link href="#twitter"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                  <Nav.Link href="#instagram"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                </Nav>
              </Col>
            </Row>
            
          </Col>
        </Row>
        
      </Container>
      <Container fluid className="bg-dark text-white">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center py-3">
            <p>&copy; 2023 - Solidarity-World. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
