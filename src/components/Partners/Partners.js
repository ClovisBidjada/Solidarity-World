import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/Partners.css';


import partner1 from '../../assets/img/partner1.png';
import partner2 from '../../assets/img/partner2.png';
import partner3 from '../../assets/img/partner3.png';

class PartnersSection extends React.Component {
  render() {
    return (
      <Container id='services' className='partner'>
        {/** 
        <h2 className='partner-text'>Nos partenaires</h2>
        <p>Ils nous font confiance</p>
        */}
        <Row className='partner-row'>
          <Col className='logo-partner' xs={12} md={3}>
            <a href='#partner1'><img src={partner1} alt="Partner 1" /></a>
          </Col>
          <Col className='logo-partner' xs={12} md={3}>
            <a href='#partner2'><img src={partner2} alt="Partner 2" /></a>
          </Col>
          <Col className='logo-partner' xs={12} md={3}>
            <a href='#partner3'><img src={partner3} alt="Partner 3" /></a>
          </Col>
          <Col className='logo-partner' xs={12} md={3}>
            <a href='#partner4'><img src={partner3} alt="Partner 3" /></a>
          </Col>
          <Col className='logo-partner' xs={12} md={3}>
            <a href='#partner4'><img src={partner3} alt="Partner 3" /></a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PartnersSection;
