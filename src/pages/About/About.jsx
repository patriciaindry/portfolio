import React from "react";
import './About.css';

import Profile from "./Profile/Profile";
import Strength from "./Strength/Strength";
import Biography from "./Biography/Biography";
import Activities from "./Activities/Activities";

const AboutPage = () => {
    return (
        <div className="aboutpage-container">
            <div className="text-area-center">
                <div className="profile-section">
                    <Profile/>
                    {/* <h1>Profile</h1>
                <p>
                    インドネシア出身、2004年生まれ。 MEXT奨学金を得て来日し、現在はアニメーション系の専門学校でAfter Effectsを中心にモーショングラフィックスや映像編集を学んでいます。 「夢」「感情」「記憶」といった抽象的なテーマや、日常にある何気ない風景や色から着想を得て、視覚的に表現することに魅力を感じています。 学びの途中ではありますが、自主制作やチーム制作を通して、アイデアを形にする力と技術を磨いています。ジャンルや手法にとらわれず、幅広い表現に挑戦し続けたいと考えています。
                </p> */}
                </div>
            </div>

                <div className="strength-section">
                    <Strength />
                </div>

                <div className="bio-section">
                    <h1 className="halftone noselect">Biography</h1>
                    <Biography />
                </div>

                <div className="activities-section">
                    <h1 className="halftone noselect">Activities</h1>
                    <Activities />
                </div>    
        </div>


    );

                //     <p>
                // <li>2004.02-2022.06</li>
                // インドネシアのスマトラ島、メダン市で生まれ育ちました。小さい頃から好奇心が強く、さまざまなことに興味を持ち、新しいことに挑戦するのが好きでした。学校時代はそろばんを学び、全国大会にも出場。また、バドミントンなどのスポーツや生徒会活動にも参加しました。高校時代は新型コロナウイルスの影響で自宅学習が続き、その間にピアノやギターなどの楽器を独学し、動画編集にも取り組むようになりました。

                // <li>2022.08-2023.02</li>
                // 高校卒業後、地元の国立大学に進学し、情報やコンピューター関連の分野を学びました。1年目にはWebプログラミングと出会い、その面白さに夢中になりました。在学中にMEXT奨学金の合格通知を受け、日本で学ぶための準備を始めました。

                // <li>2023.04~</li>
                // 2023年に来日し、まず日本語学校で1年間学びました。その後、専門学校に進学し、現在はアニメーションを専攻しています。初めての海外生活で戸惑うことも多くありましたが、多くの友人や新しい経験との出会いが、自分の視野を広げてくれました。留学中にN1に合格し、ホテルやレストランでの接客、ツアーガイドなどのアルバイトを経験しました。生活を通して、日本のデザインやクリエイティブの世界に魅了され、アニメーションの学びに加えてWeb制作やモーショングラフィックスにも挑戦しています。

                // <li>2026.??~</li>
                // 2026年以降は大学に進学し、自分の興味や関心をさらに深め、より幅広い表現力を身につけたいと考えています。見て感じる表現を通して人々の心を動かす作品を制作し、将来的には国や文化を越えて活躍できるクリエイターを目指しています。
                // </p>
}

export default AboutPage;


