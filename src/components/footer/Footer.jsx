import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 CourseHub Platform. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/jangir_samarth">
            <AiFillFacebook />
          </a>
          <a href="https://twitter.com/yourprofile">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/jangir_samarth">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
