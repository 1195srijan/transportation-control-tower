import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import FAQ from './FAQ';
import Contact from './Contact';
import './css/styles.css';
import image from './image/transportation-banner.jpg';
import visibility from './image/load-visibility.JPG';
import service_analytics from './image/service-analytics.JPG';
import CA from './image/CA.JPG';
import MV from './image/MV.JPG';
import Toggle from './Toggle';


function App() {


  const [showModal, setShowModal] = useState(false);

  const handleNotificationClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function handleToggle() {
    // Do something when the toggle is clicked
  }

  return (
    <Router>
    <div>
      <nav>
        <ul className="horizontal-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Load Visibility</Link>
          </li>
          <li>
            <Link to="/page2">Cost Analytics</Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li><a className="menu__item" href="#" onClick={handleNotificationClick}>Notification</a></li>
            <li><Link className="menu__item" to="/faqs">
                  FAQs
                </Link>
              </li>
            <li><a className="menu__item" href="https://sway.office.com/cwL3S1mLN1ObC2Q9?play">Documentation</a></li>
            <li>
                <Link className="menu__item" to="/contact">
                  Contact Us
                </Link>
            </li>
          </ul>
        </div>
      </nav>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <h2>Notification Modal</h2>
            <p>This is the content of the notification modal.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/faqs">
            <FAQ />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <img className="landing-image" src={image} alt="Landing page" />
            <div className="grid-container">
              <div className="section-1">
              <a href="Page1">
                <h2>Load Visibility</h2>
              </a>
                <img className="visibility-image" src={visibility} alt="Load Visibility" />
              </div>
              <div className="section-2">
              <a href="Page3">
                <h2>Service Analytics - last 7 days</h2>
              </a>
                <img className="service_analytics-image" src={service_analytics} alt="Service Analytics" />
              </div>
              <div className="section-3">
              <a href="Page2">
                <h2>Cost Analytics</h2>
              </a>
                <img className="cost_analytics-image" src={CA} alt="Cost Analytics" />
              </div>
              <div className="section-4">
              <a href="Page3">
                <h2>Market Analytics</h2>
                </a>
                <img className="market_analytics-image" src={MV} alt="Market Analytics" />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
