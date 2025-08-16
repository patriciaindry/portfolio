import React from "react";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Landing = () => {
  return (
    <>
        <Hero />              
        <About/>
        <Skills />
        {/* <Projects/> */}
    </>
    
  )
}

export default Landing