import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        // This wrapper ensures the main content and the copyright footer stay in order.
        <div className="footer-wrapper">
            <div className="footer-content">
                <div className="contact-me">
                    <h3 className="foot-text">get in touch!</h3>
                    <p className="foot-text">
                        pindryely.jp@gmail.com
                    </p>
                </div>

                {/* This new container will group the Menu and Social links */}
                <div className="footer-links-container">
                    <div className="nav-menu">
                        <h3 className="foot-text">Menu</h3><br />
                        <ul className="foot-ul">
                            <li className="foot-text"><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Index</Link></li>
                            <li className="foot-text"><Link to="/works" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Works</Link></li>
                            <li className="foot-text"><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Profile</Link></li>
                        </ul>
                    </div>

                    <div className="sns-links">
                        <h3 className="foot-text">Social</h3><br />
                        <ul className="foot-ul">
                            <li className="foot-text"><a href="https://www.instagram.com/patricia.indry/?" target="https://www.instagram.com/patricia.indry/?" rel="noopener noreferrer">Instagram</a></li>
                            <li className="foot-text"><a href="https://www.youtube.com/@ynz-i" target="https://www.youtube.com/@ynz-i" rel="noopener noreferrer">Youtube</a></li>
                            <li className="foot-text"><a href="https://github.com/patriciaindry" target="https://github.com/patriciaindry" rel="noopener noreferrer">Github</a></li>                
                        </ul>
                    </div>
                </div>
            </div>
            
            <footer className="copyright-footer">
                Designed and built by Patricia Indry Ely, 2025.
            </footer>
        </div>
    )
}

export default Footer;
