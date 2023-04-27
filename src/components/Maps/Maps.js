import React from "react";
//import { Col } from "react-bootstrap";
//import { MapContainer,  Marker, Popup, TileLayer } from "react-leaflet";
import '../../assets/styles/ContactForm.css';
import ContactIMG from '../../assets/img/projet2.jpg';

import '../../assets/styles/Map.css';
import '../../assets/styles/ContactForm.css';


function Map() {
  return (
    <section>
  <div id="services" className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-6 text-center mb-5">
        <h2 className="heading-section">Notre organisation travaille sur plusieurs projets visant à améliorer les conditions de vie des communautés </h2>
      </div>
    </div>
    <div id="services" className="row justify-content-center">
      <div className="col-lg-10 col-md-12">
        <div className="wrapper">
          <div className="row no-gutters">
          <div className="col-md-5 d-flex align-items-stretch">
              <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                <h3 className="mb-4 mt-md-4">Projets</h3>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Réseau business :</span><br/> Networking + Incubation de projets</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Address:</span><br/> 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Address:</span><br/> 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-7 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-1 p-2">
                <img src={ContactIMG} alt="" className="img-responsive img-rounded"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Map;

