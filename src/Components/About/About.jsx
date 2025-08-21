import React from "react";
import "./About.css";
import circledots from '../../assets/circle-bg.mp4';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
        <video autoPlay muted loop id="video-bg-about">
            <source src={circledots} type="video/mp4" />
        </video>
        <div className="about-overlay"></div>
        <div className="about-container">
            <h2>*patricia indry ely (パトリシア・インドリ・エリ)</h2>
            <h4>2004.02.20 || 21y.o || Indonesia → Japan || MEXT student</h4>
            <h1>/</h1>
            <p className="text-explain">
                新しい学びや生活を通して経験を重ねたいという思いから、2023年にMEXT奨学金に挑戦して日本へ留学しました。アニメーションを学びながら、Webデザインやモーショングラフィックスにも挑戦中。見て感じる表現を作り出すことが目標です。趣味はバドミントン、自然観察、等。
            </p>
          <Link to="/about">
            <button className="btn-about">
              View more About Me!
            </button>
          </Link>
        </div>
    </div>

  );
};

export default About;
