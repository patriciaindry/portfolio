import React from "react";
import './Hero.css';
import circledots from '../../assets/circledots.mp4';

const Hero = () => {
    return (
        <div className="hero">
            <video autoPlay muted loop id="video-bg">
                <source src={circledots} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="rotate">SCROLL DOWN</div>
            <div className="hero-text container">
                <h1>Portfolio</h1>
                <p>Write something here</p>
                <button className="btn">Button</button>
            </div>
            
        </div>
    )
}

export default Hero;