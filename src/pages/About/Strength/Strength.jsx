import React from "react";
import './Strength.css';

const Strength = () => {
    return (
        <div className="strength-section-wrapper">
            <h1>Strength</h1>
            <div className="strength-section">
                <div className="strength-container strength-01">
                    <h3>1. 好奇心と幅広いスキル</h3>
                    <p>アニメーション、音楽、モーショングラフィックスなどの創作分野から、Webプログラミングのような技術分野まで幅広く興味を持っています。新しいことに挑戦し続ける姿勢が、多様なスキルの習得につながっています。</p>
                </div>

                <div className="strength-container strength-02">
                    <h3>2. 技術と細部へのこだわり</h3>
                    <p>グループ作業では、技術面での課題解決や、作品が意図通りに機能するための調整を自然に担当します。細部にまで気を配り、丁寧に作業を進めるため、安心して任せられる存在です。</p>
                </div>

                <div className="strength-container strength-03">
                    <h3>3. 集中力の発揮</h3>
                    <p>普段は落ち着いて物事を進めますが、締め切りが近づくと集中力を高め、質の高い成果を出すことができます。この柔軟な対応力が、時間的制約のある場面でも力を力を発揮します。</p>
                </div>

            </div>
        </div>
    );
}

export default Strength;
