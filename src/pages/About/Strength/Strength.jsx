import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Strength.css";

gsap.registerPlugin(ScrollTrigger);

const Strength = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".strength-container");

      // ensure starting CSS vars + opacity (in case CSS didn't apply yet)
      items.forEach((el) => {
        gsap.set(el, { opacity: 0, clearProps: "transform" }); // clearProps just in case
        // set initial CSS var (works even if CSS already set it)
        el.style.setProperty("--ty", "40px");
      });

      gsap.to(items, {
        // animate CSS var --ty and opacity
        "--ty": "-150px",
        opacity: 1,
        duration: 1.1,
        stagger: 0.18,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",                 // when section is ~80% down viewport
          toggleActions: "play none none reset",
          // markers: true,                    // keep markers while tuning
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="strength-section-wrapper" ref={sectionRef}>
      <h1 className="halftone noselect">Strength</h1>
      
      <div className="strength-section">
        <div className="strength-container strength-01">
          <h3>1. 好奇心と幅広いスキル</h3>
          <p>
            アニメーション、音楽、モーショングラフィックスなどの創作分野から、Webプログラミングのような技術分野まで幅広く興味を持っています。新しいことに挑戦し続ける姿勢が、多様なスキルの習得につながっています。
          </p>
        </div>

        <div className="strength-container strength-02">
          <h3>2. 技術と細部へのこだわり</h3>
          <p>
            自主的に気を配り、他の人に見えない所まで作業を詰めて行きますグループ作業では、技術面での課題解決や、作品が意図通りに機能するための調整を自然に担当します。
          </p>
        </div>

        <div className="strength-container strength-03">
          <h3>3. 集中力の発揮</h3>
          <p>
            普段は落ち着いて物事を進めますが、締め切りが近づくと集中力を高め、質の高い成果を出すことができます。この柔軟な対応力が、時間的制約のある場面でも力を力を発揮します。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strength;
