import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';

import '../../assets/styles/Avantages.css';
import '../../assets/styles/fa.min.css';
import '../../assets/styles/gfonts.min.css';


//import Av1 from '../../assets/img/av1.jpeg';
//import Av2 from '../../assets/img/av2.jpeg';
//import Av3 from '../../assets/img/av3.jpeg';
//import Av4 from '../../assets/img/av4.jpeg';


function Avantages() {
  return (
    <Container >
       <Row id='services'>
            <Col>
                <div className="generating-area ">
                    <div className="container ">
                        <div className="row  d-flex justify-content-center">
                        <div className="col-lg-8  ">
                            <div className="section-tittle text-center ">
                            <h2>
                                <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    Générer de nouveaux clients via le mode en ligne
                                </font>
                                </font>
                            </h2>
                            </div>
                        </div>
                        </div>
                        <Row className="row section-tittle d-flex justify-content-center">
                            <Col className="col-lg-5 col-md-6">
                                <div className="single-generating d-flex mb-30">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                <div className="generating-cap">
                                    <h4>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Entreprises de toutes tailles
                                        </font>
                                    </font>
                                    </h4>
                                    <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Seddo eiusmod tempor incididunt labore lore magna aliqua
                                        uisipsum s incididun se ultrices gravida.
                                        </font>
                                    </font>
                                    </p>
                                </div>
                                </div>
                            </Col>
                            <Col className="col-lg-5 col-md-6">
                                <div className="single-generating d-flex mb-30">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                <div className="generating-cap">
                                    <h4>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Des résultats impressionnants
                                        </font>
                                    </font>
                                    </h4>
                                    <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Seddo eiusmod tempor incididunt labore lore magna aliqua
                                        uisipsum suspendis incididun se ultrices gravida.
                                        </font>
                                    </font>
                                    </p>
                                </div>
                                </div>
                            </Col>
                            <Col className="col-lg-5 col-md-6">
                                <div className="single-generating d-flex mb-30">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                <div className="generating-cap">
                                    <h4>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Vous tenir au courant
                                        </font>
                                    </font>
                                    </h4>
                                    <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Seddo eiusmod tempor incididunt labore lore magna aliqua
                                        uisipsum suspendis incididun se ultrices gravida.
                                        </font>
                                    </font>
                                    </p>
                                </div>
                                </div>
                            </Col>
                            <Col className="col-lg-5 col-md-6">
                                <div className="single-generating d-flex mb-30">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                <div className="generating-cap">
                                    <h4>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        ROI significatif
                                        </font>
                                    </font>
                                    </h4>
                                    <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                        Seddo eiusmod tempor incididunt labore lore magna aliqua
                                        uisipsum suspendis incididun se ultrices gravida.
                                        </font>
                                    </font>
                                    </p>
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </Col>
        </Row>
    </Container>
  );
}

export default Avantages;