import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Some text</h3>
                <p>blablbalbla</p>
                <ul>
                    <li>emailmu</li>
                    <li>notelp</li>
                    <li>alamatmu</li>
                </ul>
            </div>
            <div className="contact-col">
                <h3>Nav links</h3>
                <ul>
                    <li>projects</li>
                    <li>work</li>
                    <li>about</li>
                    <li>contacts</li>
                </ul>
            </div>
            <div className="contact-col">
                <h3>special thanks</h3>
                <ul>
                    <li>projects</li>
                    <li>work</li>
                    <li>about</li>
                    <li>contacts</li>
                </ul>
            </div>
        </div>
    ) 
}

export default Footer