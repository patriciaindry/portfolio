import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="foot-container">
                <div className="footer">
                <div className="contact-me">
                    <h3 className="foot-text">*get in touch!</h3>
                    <p className="foot-text">
                        pindryely.jp@gmail.com
                    </p>
                </div>

                <div className="nav-menu">
                    <h3 className="foot-text">Menu</h3><br />
                    <ul className="foot-ul">
                        <li className="foot-text">Projects</li>
                        <li className="foot-text">Work</li>
                        <li className="foot-text">About</li>
                    </ul>
                </div>

                <div className="sns-links">
                    <h3 className="foot-text">Social</h3><br />
                    <ul className="foot-ul">
                        <li className="foot-text">Instagram</li>
                        <li className="foot-text">Youtube</li>
                        <li className="foot-text">Github</li>                
                    </ul>
                </div>
            </div>
            </div>
            <footer>
                Designed and built by Patricia Indry Ely, 2025.
            </footer>
        </div>
        
    ) 
}

export default Footer