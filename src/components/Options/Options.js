import React from "react";
import { Row, Col, Button } from "react-bootstrap";
//import { MapContainer,  Marker, Popup, TileLayer } from "react-leaflet";
import '../../assets/styles/Options.css';
import Img1 from '../../assets/img/icon/010-excellence.png';
import Img2 from '../../assets/img/icon/014-struggle.png';

import '../../assets/styles/Map.css';
import '../../assets/styles/ContactForm.css';


function Options() {
  return (
    <section>
        <Row id="services" className="container">
            <Row className="row justify-content-center">
            <div className="col-lg-10 col-md-6 text-center mb-5">
                <h2 className="heading-section">Notre organisation travaille sur plusieurs projets visant à améliorer les conditions de vie des communautés </h2>
            </div>
            </Row>
            <Row id="page-inscription" className="row  page-inscription">
                <Row className="col-lg-12 col-md-12">
                    <div className="main-content d-flex flex-column  align-items-center">
                        <div className="section-option">
                            <div className="container">
                                <Row className="blocs-inscription">
                                    <Col className="bloc-inscription bloc-inscription-freelance col-lg-6 col-md-6">
                                        <div className="titre">
                                            <div className="image">
                                            <img alt="" width={110} height={113} src={Img1}/>
                                            </div>
                                            <div className="texte">Je suis freelance</div>
                                        </div>
                                        <div className="sous-titre">
                                            <span className="blue">
                                            Je recherche une mission <br className="mobile" />
                                            et je veux publier mon profil
                                            </span>
                                        </div>
                                        <div className="liste">
                                            <ul>
                                            <li>Inscription gratuite</li>
                                            <li>
                                                Postulez facilement aux offres
                                                <br />
                                                de mission en ligne
                                            </li>
                                            <li>
                                                Partagez votre profil
                                                <br />
                                                sur les réseaux sociaux
                                            </li>
                                            </ul>
                                        </div>
                                    <div className="bouton">
                                        <a
                                        className="btn btn-orange btn-orange-white-hover"
                                        href="/inscription-freelance"
                                        data-tracking-cta="Liens divers - accès parcours freelance"
                                        >
                                        Inscription Freelance
                                        </a>
                                    </div>
                                    </Col>
                                    <Col className="bloc-inscription bloc-inscription-client col-lg-6 col-md-6">
                                    <div className="titre">
                                        <div className="image">
                                        <img alt="" width={110} height={113} src={Img2}/>
                                        </div>
                                        <div className="texte">Je suis une entreprise</div>
                                    </div>
                                    <div className="sous-titre">
                                        <span className="blue">
                                        Je veux publier des offres de mission <br className="mobile" />
                                        et contacter des freelances
                                        </span>
                                    </div>
                                    <div className="liste">
                                        <ul>
                                        <li>Publiez vos offres de mission</li>
                                        <li>
                                            Consultez et sélectionnez
                                            <br />
                                            des profils
                                        </li>
                                        <li>
                                            Contactez directement
                                            <br />
                                            les freelances
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="bouton">
                                        <a
                                        className="btn btn-orange btn-orange-white-hover"
                                        href="/inscription-client"
                                        >
                                        Inscription Entreprise
                                        </a>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </Row>
        </Row>
    </section>

  );
}

export default Options;

