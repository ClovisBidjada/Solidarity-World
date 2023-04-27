import React from 'react';
import {} from '@mui/material';
import { FaUser, FaCog, FaEnvelope, FaBell } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../../assets/img/barnner.jpg';
import '../../assets/styles/LandingPage.css';



const LandingPage = () => {
  return (
    <Container className='landingpage' fluid style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'right', backgroundSize: 'cover' }}>
      <Row>
        <Col className='landing-contenu' md={{ span: 10, offset: 1 }}>
          <h1>Solidarityworld construit G.nioos</h1>
          <h4>Un portail citoyen particpatif global pour accéder aux differentes plateformes et services conçus et agrégés par la communaté. Le tout intégré à une nouvelle tablette pour créer le réseau internet de demain. </h4>
          <Button className=" btn bt1" mt={2} mb={2} variant="primary" href="#about">En savoir plus</Button>
          <Button className=" btn bt2" mt={2} mb={2} variant="primary" href="#about">Nous Contactez</Button>

        </Col>    
      </Row>
      
    </Container>
  );
};

export default LandingPage;
