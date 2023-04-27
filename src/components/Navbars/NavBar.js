import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles/NavBar.css';

import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <Navbar className='' bg="light" expand="lg">
      <Navbar.Brand href="#"><img src={logo} alt='imag'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='list-menu' id="basic-navbar-nav">
        <Nav className=" m-auto">
        <Nav.Link href="#accueil">Accueil</Nav.Link>
          <Nav.Link href="#apropos">Projets</Nav.Link>
          <Nav.Link href="#avantages">Avantages</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
    
          {/* MENU DEROULANT AU CAS OU BESOINS  */}
          {/*
          <NavDropdown title="À propos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#histoire">Histoire</NavDropdown.Item>
            <NavDropdown.Item href="#equipe">Notre équipe</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#mission">Notre mission</NavDropdown.Item>
          </NavDropdown>
          */}
        </Nav>
        {/** 
         {/* BARRE DE RECHERCHE AU CAS OU BESOINS  */}
         {/*
        <Form inline>
          <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
          <Button variant="outline-success">Rechercher</Button>
        </Form>
        */}
        
        <Nav className="mr-auto">
          <Nav.Link href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
          <Nav.Link href="#twitter"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
          <Nav.Link href="#instagram"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
