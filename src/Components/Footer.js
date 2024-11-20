import React from 'react';

const Footer = () => {
    return (
        <footer className="darksoul-footer">
            <div className="darksoul-footer-content">
                <div className="darksoul-footer-section">
                    <div className="darksoul-footer-heading">
                        <h1>Parking Management System</h1>
                    </div>
                    <ul className="d-footer-ul">
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">Home</a>
                        </li>
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">About</a>
                        </li>
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">Contact</a>
                        </li>
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="darksoul-footer-section">
                    <div className="darksoul-footer-heading">
                        <h1>Quick Links</h1>
                    </div>
                    <ul className="d-footer-ul">
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">Book a slot</a>
                        </li>
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">Cancel a slot</a>
                        </li>
                        <li className="d-footer-li">
                            <a href="#" className="d-footer-li-h">User Dashboard</a>
                        </li>
                    </ul>
                </div>
                <div className="darksoul-footer-section">
                    <div className="darksoul-footer-heading">
                        <h1>Address</h1>
                    </div>
                    <p className="d-footer-li-h">123, Main Street, Anytown, USA 12345</p>
                </div>
            </div>
            <div className="darksoul-footer-bottom">
                <div className="darksoul-footer-bottom-sec">
                    <p>&copy; 2024 Parking Management System</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
