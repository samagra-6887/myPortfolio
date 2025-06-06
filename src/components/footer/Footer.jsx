import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Samagra Singh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/samagra-singh9" className="footer__social-link" target="_blank" >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/samagra-6887" className="footer__social-link" target="_blank" >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://x.com/samagrasingh09" className="footer__social-link" target="_blank" >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy"> &#169; 2025 Samagra Singh. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
