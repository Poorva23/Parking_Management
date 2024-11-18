import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div style={{ height: 400 }}>
      <div className="darksoul-footer">
        <div className="darksoul-footer-top"></div>
        <div className="darksoul-footer-content">
          <div className="darksoul-footer-section">
            <h1 className="darksoul-footer-heading">DarkSoul</h1>
          </div>
          <div className="darksoul-footer-section">
            <ul className="d-footer-ul">
              <li className="d-footer-li-h"><b>Links</b></li>
              <li className="d-footer-li">Home</li>
              <li className="d-footer-li">About</li>
              <li className="d-footer-li">Blog</li>
              <li className="d-footer-li">Design</li>
              <li className="d-footer-li">Documentation</li>
            </ul>
          </div>
          <div className="darksoul-footer-section">
            <ul className="d-footer-ul">
              <li className="d-footer-li-h"><b>Blog</b></li>
              <li className="d-footer-li">UI / UX</li>
              <li className="d-footer-li">CodePens</li>
              <li className="d-footer-li">Codedamn</li>
              <li className="d-footer-li">Figma</li>
              <li className="d-footer-li">Oracle EBS</li>
            </ul>
          </div>
          <div className="darksoul-footer-section">
            <ul className="d-footer-ul">
              <li className="d-footer-li-h"><b>Privacy policy</b></li>
              <li className="d-footer-li-h"><b>Contact Us</b></li>
            </ul>
          </div>
          <div className="darksoul-footer-section">
            <div className="logo-head">
              <b>Follow me on</b>
            </div>
            <div className="logo">
              <a href="https://www.instagram.com/dark.soul.io/" target="_blank">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/100/instagram-new.png" alt="instagram-new" />
              </a>
              <a href="https://www.youtube.com/channel/UCooCOD2j8Q4Y9ysYZIFzI_w" target="_blank">
                <img width="30" height="30" src="https://img.icons8.com/ios-filled/100/youtube-squared.png" alt="youtube-squared" />
              </a>
              <a href="https://dribbble.com/dark-soul" target="_blank">
                <img width="25" height="25" src="https://img.icons8.com/offices/100/dribbble.png" alt="dribbble" />
              </a>
            </div>
          </div>
        </div>
        <div className="darksoul-footer-bottom">
          <div className="darksoul-footer-bottom-sec">
            <p>Icons by <a href="https://icons8.com/" target="_blank">Icons8</a></p>
          </div>
          <div className="darksoul-footer-bottom-sec">
            <p>Designed & Created by <a href="https://darksoul-codepen.github.io/" target="_blank">DarkSoul</a></p>
          </div>
          <div className="darksoul-footer-bottom-sec">
            <p>&copy; 2024 DarkSoul</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;