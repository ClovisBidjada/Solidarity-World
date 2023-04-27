import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import videoSource from '../../assets/video/Video.mp4';
import '../../assets/styles/VideoSection.css';

import av1 from '../../assets/img/icon-together.png';
import av2 from '../../assets/img/icon-earth.png';
import av3 from '../../assets/img/icon-explore.png';
import av4 from '../../assets/img/icon-go.png';
import av5 from '../../assets/img/icon-paper.png';
import av6 from '../../assets/img/icon-proces.png';




const VideoSection = () => {
  return (
    <Container className='video' fluid>
      {/* Section de la video*/}
     {/* 
      <Row>
        <Col className='video-text' md={{ span: 6, offset: 1 }}>
          <h1>Bienvenue sur ma section de vidéo</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <Col className='landing-contenu' md={{ span: 6, offset: 1 }}>
            <Button className=" btn" mt={2} mb={2}variant="primary" href="#about">En savoir plus</Button>
          </Col>
        </Col>
        <Col md={5} className="video-container">
          <video autoPlay muted loop>
            <source className='mp4' src={videoSource} type="video/mp4" />
          </video>
        </Col>
      </Row>
  */}
      <Row id="services" className="section lb">
        <div className="container">
          <Col className="section-title text-center">
            {/*  <small>OnePage SEO - Validation - BACKLINKS</small>  */}
            <h3 className='service'>Nos services sont conçus pour améliorer la vie de nos clients.</h3>
            <p className="text">Nous offrons une gamme complète de services à nos clients pour répondre à tous leurs besoins</p>
          </Col>
          {/* end title */}
            <Row className="row text-center">
                <Col className="col-md-4 col-sm-4 col-xs-12">
                    <Row className="service-widget">
                      <Col className="post-media wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
                        <img src={av1} alt="" className="img-responsive img-rounded"/>
                      </Col>
                    <h3>Projet N1</h3>
                    <p>Grâce au portail citoyen participatif global, la communauté pourra créer son propre réseau internet indépendant et résilient, capable de résister aux perturbations externes.</p>
            </Row>
            {/* end service */}
              </Col>
          {/* end col */}
          <Col className="col-md-4 col-sm-4 col-xs-12">
            <div className="service-widget">
              <div className="post-media wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <img src={av2} alt="" className="img-responsive img-rounded"/>
              </div>
              <h3>Projet N2</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
            {/* end service */}
          </Col>
          {/* end col */}
          <Col className="col-md-4 col-sm-4 col-xs-12">
            <div className="service-widget">
              <div
                className="post-media wow fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <img
                  src={av3}
                  alt=""
                  className="img-responsive img-rounded"
                />
              </div>
              <h3>Projet N3</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
            {/* end service */}
          </Col>
          {/* end col */}
          </Row>
          {/* end row */}
          <hr className="invis" />
          <div className="row text-center">
          <Col className="col-md-4 col-sm-4 col-xs-12">
        <div className="service-widget">
          <div
            className="post-media wow fadeIn"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <img
              src={av4}
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <h3>Projets N4</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        </div>
        {/* end service */}
          </Col>
      {/* end col */}
      <Col className="col-md-4 col-sm-4 col-xs-12">
        <div className="service-widget">
          <div
            className="post-media wow fadeIn"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <img
              src={av5}
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <h3>Projet N5</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        </div>
        {/* end service */}
      </Col>
      {/* end col */}
      <Col className="col-md-4 col-sm-4 col-xs-12">
        <div className="service-widget">
          <div
            className="post-media wow fadeIn"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <img
              src={av6}
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <h3>Projet N6</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        </div>
        {/* end service */}
      </Col>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</Row>

    </Container>
  );
};

export default VideoSection;
