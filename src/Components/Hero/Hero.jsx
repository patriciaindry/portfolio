import React from "react";
import './Hero.css';
import circledots from '../../assets/circle-bg.mp4';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            {/* <video autoPlay muted loop id="video-bg">
                <source src={circledots} type="video/mp4" />
            </video>
            <div className="overlay"></div> */}
            <div className="text-box">
                Welcome to my portfolio. <br />
                <i>It's great to have you here!</i> Feel free to explore my projects :&#41;  <br />

            </div>
            <div className="rotate">SCROLL DOWN</div>
            <div className="hero-text container">
                <h1 className="halftone noselect">Portfolio</h1>
                <p className="hero-text-forp">Media | Information | Design | Animation</p>
                {/* <p>Write something here</p>
                <button className="btn">Button</button> */}
                
            </div>
            
        </div>
    )
}
//                Web version: 08.Nov.2025
export default Hero;