import React, { useEffect } from "react";
import "./Projects.css";
// import placeholder from "../../../public/thumbnail/galaxy.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


import { projects } from "../../pages/Works/data";



const placeholder = "https://placehold.co/1200x675/CCCCCC/333333?text=No+Image";


const Projects = () => {
  const featured = projects.filter(p => p.featuredWork);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = [
      { id: "projcard-1", endTranslateX: -2000, rotate: 45 },
      { id: "projcard-2", endTranslateX: -1000, rotate: -30 },
      { id: "projcard-3", endTranslateX: -2000, rotate: 45 },
      { id: "projcard-4", endTranslateX: -1500, rotate: -30 },
    ];

    // Horizontal scrolling
    ScrollTrigger.create({
      trigger: ".projects-wrapper",
      start: "top top",
      end: "+=800vh",
      scrub: 0.1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".projects-wrapper", {
          x: `${-500 * self.progress}vw`,
          duration: 1,
          ease: "power1.out",
        });
      },
    });

    // Card animations
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: `#${card.id}`,
        start: "top top",
        end: "+=350vh",
        scrub: 5,
        onUpdate: (self) => {
          gsap.to(`#${card.id}`, {
            x: `${card.endTranslateX * self.progress}px`,
            rotate: `${card.rotate * self.progress * 2}`,
            ease: "power3.out",
          });
        },
      });
    });

    // Cleanup when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects-container">
        <section className="projects-wrapper">
          <h1 className="proj-h1">Featured Works</h1>
          <div className="projcard" id="projcard-1">
            <Link to={`/works/${featured[0].id}`}>
              <img src={`${import.meta.env.BASE_URL}${featured[0].thumbnail}`} alt={featured[0].title} />
            </Link>
          </div>
          <div className="projcard" id="projcard-2">
            <Link to={`/works/${featured[1].id}`}>
              <img src={`${import.meta.env.BASE_URL}${featured[1].thumbnail}`} alt={featured[1].title} />
            </Link>
          </div>
          <div className="projcard" id="projcard-3">
            <Link to={`/works/${featured[2].id}`}>
              <img src={`${import.meta.env.BASE_URL}${featured[2].thumbnail}`} alt={featured[2].title} />
            </Link>
          </div>
          <div className="projcard" id="projcard-4">
            <Link to={`/works/${featured[2].id}`}>
              <img src={`${import.meta.env.BASE_URL}${featured[2].thumbnail}`} alt={featured[2].title} />
            </Link>
          </div>
        </section>
        <section className="outro">
          <Link to="/works">
            <button className="btn-projects">
              View more of my works!
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
export default Projects;
