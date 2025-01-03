import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-about">
          <h2 id="about-heading">About Us</h2>
          <p id="about-description">
          We are committed to delivering an efficient and intuitive parking management system that enhances the overall parking experience. Our project is designed to simplify parking operations, enabling drivers to effortlessly find available spaces and manage their bookings with ease.
          </p>
        </div>
        <div id="footer-contact">
          <h2 id="contact-heading">Contact Us</h2>
          <p id="contact-email">Email: <a href="mailto:support@gmail.com">poorva23@gmail.com</a></p>
          <p id="contact-phone">Phone: <a href="tel:+9182736450">+91 9874567776</a></p>
        </div>
        <div id="footer-social">
          <h2 id="social-heading">Follow Us</h2>
          <p id="social-links">
            <a href="https://facebook.com" id="facebook-link" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://twitter.com" id="twitter-link" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://instagram.com" id="instagram-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <div id="footer-bottom">
        <p id="footer-rights">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
