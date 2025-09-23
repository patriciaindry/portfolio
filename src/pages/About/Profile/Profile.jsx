import React from "react";
import './Profile.css';
import pasfoto from "../../../assets/pasfoto1.png";

const Profile = () => {
    return (
        <div className="profile-area">
            <h1 className="halftone">Profile</h1>
            <div className="profile-section">
                <img src={pasfoto} alt="" className="pasfoto"/>
                <div className="profile-text">
                    <h2>Patricia Indry Ely</h2>
                    <p>
                        インドネシア出身、2004年生まれ。 <br /> 
                        MEXT奨学金を得て来日し、現在はアニメーション系の専門学校でAfter Effectsを中心にモーショングラフィックスや映像編集を学んでいます。 
                        「夢」「感情」「記憶」といった抽象的なテーマや、日常にある何気ない風景や色から着想を得て、視覚的に表現することに魅力を感じています。 
                        学びの途中ではありますが、自主制作やチーム制作を通して、アイデアを形にする力と技術を磨いています。
                        ジャンルや手法にとらわれず、幅広い表現に挑戦し続けたいと考えています。
                    </p>
                </div>

            </div>
        </div>
    );
}
export default Profile;


