import React from 'react';
import '../assets/styles/App.css';
import NavBar from '../components/Navbars/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import LandingPage from '../components/LandingPage/LandingPage.js';
import Map from '../components/Maps/Maps.js';
import Avantages from '../components/Avantages/Avantages.js';
import Partners from '../components/Partners/Partners.js';
import ContactForm from '../components/ContactForm/ContanctForm.js';
import Services from '../components/Services/Services.js';
import Options from '../components/Options/Options.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoSection from './VideoSection/VideoSection';


function App() {
  return (
    <div className="App">
      <div className="App-header Nav-bar">
        <div className="Nav">
          <NavBar/>
          <LandingPage/>
          <Services/>
          <VideoSection/>
          <Avantages/>
          <Map/>
          <Partners/>
          <ContactForm/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
