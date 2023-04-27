import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/Services.css';

import Icon1 from '../../assets/img/icon/006-growth.png';
import Icon2 from '../../assets/img/icon/007-team.png';
import Icon3 from '../../assets/img/icon/002-idea.png';
import Icon4 from '../../assets/img/icon/004-focus.png';





const Services = () => {
  return (
    <Container className='video' fluid>
      <Row className="section">
            <div className="container">

                 <section className="container">
                    <div className="container-fluid cards-products-home circles">
                        <Col className="">
                            <a
                            href="#services-1"
                            className="track icons-circle"
                            data-track-arguments="ga, event, home, subhome-icons"
                            >
                            <div className="cards-products-home__item">
                                <div className="cards-products-home__item__image">
                                <div className="circle">
                                    <div className="image">
                                    <img
                                        className="lzy lazyload--done"
                                        src={Icon1}
                                        alt="icons"
                                        width={114}
                                        height={114}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="cards-products-home__item__text">
                                    <span>24</span>
                                <h6 className="font-lg mg-bottom-lv1">Pays couverts</h6>
                                <p className="regular font-sm">
                                Nous sommes spécialisés dans les pays couverts par notre entreprise
                                </p>
                                </div>
                            </div>
                            </a>
                        </Col>
                        <Col className="">
                            <a
                            href="#services-2"
                            className="track uicons-circle"
                            data-track-arguments="ga, event, home, subhome-uicons"
                            >
                            <div className="cards-products-home__item">
                                <div className="cards-products-home__item__image">
                                <div className="circle">
                                    <div className="image">
                                    <img
                                        className="lzy lazyload--done"
                                        src={Icon2}
                                        alt="interface icons"
                                        width={114}
                                        height={114}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="cards-products-home__item__text">
                                    <span>30</span>
                                <h6 className="font-lg mg-bottom-lv1">Menbres</h6>
                                <p className="regular font-sm">
                                Nous sommes une communauté soudée grâce à l'engagement de nos membres.
                                </p>
                                </div>
                            </div>
                            </a>
                        </Col>
                        <Col className="">
                            <a
                            href="#services-3"
                            className="track video aicons-circle"
                            data-track-arguments="ga, event, home, subhome-animated-icons"
                            >
                            <div className="cards-products-home__item">
                                <div className="cards-products-home__item__image">
                                <div className="circle">
                                    <div className="image">
                                    <img
                                        className="lzy lazyload--done"
                                        src={Icon3}
                                        alt="animated icons"
                                        width={114}
                                        height={114}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="cards-products-home__item__text">
                                    <span>125</span>
                                <h6 className="font-lg mg-bottom-lv1">Compétences</h6>
                                <p className="regular font-sm">
                                Les compétences de notre équipe sont notre plus grand atout
                                </p>
                                </div>
                            </div>
                            </a>
                        </Col>
                        <Col className="">
                            <a
                            href="#services-4"
                            className="track stickers-circle"
                            data-track-arguments="ga, event, home, subhome-stickers"
                            >
                            <div className="cards-products-home__item">
                                <div className="cards-products-home__item__image">
                                <div className="circle">
                                    <div className="image">
                                    <img
                                        className="lzy lazyload--done"
                                        src={Icon4}
                                        alt="stickers"
                                        width={114}
                                        height={114}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="cards-products-home__item__text">
                                    <span>2850</span>
                                <h6 className="font-lg mg-bottom-lv1">CHF récoltés</h6>
                                <p className="regular font-sm">
                                Grâce aux CFH récoltés, nous avons pu étendre notre impact et aider plus de personnes.
                                </p>
                                </div>
                            </div>
                            </a>
                        </Col>
                    </div>
                </section>

            </div>
        </Row>

    </Container>
  );
};

export default Services;
