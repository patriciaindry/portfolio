import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Biography.css';
import pasfoto from "../../../assets/pasfoto1.png";
import pertama from "../../../assets/pertama.png";
import kedua from "../../../assets/kedua.png";
import ketiga from "../../../assets/ketiga.png";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null); // Ref for the scroll section

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = section.querySelector(".wrapper");
    const items = wrapper.querySelectorAll(".item");

    // Set initial positions for items
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { xPercent: 200 }); // horizontal scroll
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: '-100px',
        end: () => `+=${items.length * 100}%`, // scroll distance
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true, // optional
      },
      defaults: { ease: "none" },
    });

    // Animate each item
    items.forEach((item, index) => {
      timeline.to(item, { scale: 0.9, borderRadius: "10px" });

      if (index + 1 < items.length) {
        timeline.to(items[index + 1], { xPercent: 0 }, "<");
      }
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="scroll-section horizontal-section section" ref={sectionRef}>
      
      <div className="wrapper">
        <div role="list" className="list">
          <div role="listitem" className="item">
            <div className="item_content">
              <h2 className="item_number">1</h2>
              <h2>2004.02-2022.06</h2>
              <p className="item_p">
                インドネシアのスマトラ島、メダン市で生まれ育ちました。小さい頃から好奇心が強く、
                さまざまなことに興味を持ち、新しいことに挑戦するのが好きでした。
                学校時代はそろばんを学び、全国大会にも出場。また、バドミントンなどのスポーツや生徒会活動にも参加しました。
                高校時代は新型コロナウイルスの影響で自宅学習が続き、
                その間にピアノやギターなどの楽器を独学し、動画編集にも取り組むようになりました。
              </p>
            </div>
            <img src={pertama} alt="" className="item_media" />
          </div>
          <div role="listitem" className="item">
            <div className="item_content">
              <h2 className="item_number">2</h2>
              <h2>2022.08-2023.02</h2>
              <p className="item_p">
                高校卒業後、地元の国立大学に進学し、情報やコンピューター関連の分野を学びました。
                1年目にはWebプログラミングと出会い、その面白さに夢中になりました。
                在学中にMEXT奨学金の合格通知を受け、日本で学ぶための準備を始めました。
              </p>
            </div>
            <img src={kedua} alt="" className="item_media" />
          </div>
          <div role="listitem" className="item">
            <div className="item_content">
              <h2 className="item_number">3</h2>
              <h2>2023.04~</h2>
              <p className="item_p">
                2023年に来日し、まず日本語学校で1年間学びました。
                初めての海外生活で戸惑うことも多くありましたが、多くの友人や新しい経験との出会いが、自分の視野を広げてくれました。
                一年間の日本語学校にN1に合格し、ホテルやレストランでの接客、ツアーガイドなどのアルバイトを経験しました。
              </p>
            </div>
            <img src={ketiga} alt="" className="item_media" />
          </div>
          <div role="listitem" className="item">
            <div className="item_content">
              <h2 className="item_number">4</h2>
              <h2>2024.04~2026.03</h2>
              <p className="item_p">
                その後、専門学校に進学し、現在はアニメーションを専攻しています。生活を通して、日本のデザインやクリエイティブの世界に魅了され、アニメーションの学びに加えてWeb制作やモーショングラフィックスにも挑戦しています。
              </p>
            </div>
            <img src={pasfoto} alt="" className="item_media" />
          </div>
          <div role="listitem" className="item">
            <div className="item_content">
              <h2 className="item_number">5</h2>
              <h2>2026.??~</h2>
              <p className="item_p">
                2026年以降は大学に進学し、自分の興味や関心をさらに深め、より幅広い表現力を身につけたいと考えています。
                見て感じる表現を通して人々の心を動かす作品を制作し、将来的には国や文化を越えて活躍できるクリエイターを目指しています。
              </p>
            </div>
            <img src={pasfoto} alt="" className="item_media" />
          </div>
        </div>
      </div>
    </div>
  );
}
