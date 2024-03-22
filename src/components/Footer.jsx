import React from 'react';
import './Footer.css';
import logoImage from '../assets/ecell.png'; // Ensure this image exists

const Footer = () => {
  return (
    <footer className="footer-wrapper">
   
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logoImage} alt="E-Cell Logo" className="footer-logo" />
          <p>
            E-Cell IIT Bombay is Asia’s Largest Entrepreneurship promoting student body
            and we build startup ecosystem on both the sides of the wall
          </p>
          <p>25 YEARS OF CREATING JOB CREATORS</p>
          <p>Contact Us: eureka23@ecell.in</p>
        </div>
        
        <div className="footer-section quick-links">
          <h5>QUICK LINKS</h5>
          <ul>
            <li>E-Summit</li>
            <li>Eureka! GCC</li>
            <li>NEC</li>
            <li>Eureka! Junior</li>
            <li>EnB</li>
            <li>Campus Executive</li>
            <li>Illuminate</li>
          </ul>
        </div>

        <div className="footer-section reach-out">
          <h5>REACH OUT</h5>
          <address>
            E-Cell Office<br />
            Student Activity Centre (SAC)<br />
            IIT Bombay<br />
            Powai, Mumbai, India
          </address>
        </div>

        
      </div>
      </footer>
  );
};

export default Footer;