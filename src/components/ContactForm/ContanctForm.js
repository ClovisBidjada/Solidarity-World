import React from 'react';
import '../../assets/styles/Map.css';
import Contact from '../../assets/img/contact.jpeg';



function ContactForm() {
  return (
    <section id='Contact' className="contact">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-6 text-center mb-5">
        <h2 className="heading-section" color='#fff'>N'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez en savoir plus sur nos produits et services.</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-12">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-md-7 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Votre Message</h3>
                <div id="form-message-warning" className="mb-4" />
                <div id="form-message-success" className="mb-4">
                  Votre a été envoyer avec succès, Merci!
                </div>
                <form method="POST" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Objet"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={7}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary"
                        />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
              <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text pl-3">
                     <span>Adresse:</span>
                     <p>
                      198 EXEMPLE 21th Street, Suite 721 New
                      Paris NY 10016
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="text pl-3">
                    <span>Phone:</span>
                    <p><a href="tel://1234567920">+33 12 34 56 67 89</a></p>
                    <p><a href="tel://1234567920">+33 12 34 56 67 89</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane" />
                  </div>
                  <div className="text pl-3">
                    <span>Email:</span>
                    <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe" />
                  </div>
                  <div className="text pl-3">
                    <span>Website</span>
                    <p><a href="#">yoursite.com</a></p>
                  </div>
                </div>
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

export default ContactForm;
