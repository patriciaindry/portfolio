import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//global
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//landing-page
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
//other-page
import Works from './pages/Works/Works';
import AboutPage from './pages/About/About';
import ContactPage from './pages/Contact/Contact';
import Test from "./Components/testing/Test";
import Title from "./Components/Title/Title";
import WorksDetail from "./pages/WorksDetail/WorksDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Title subTitle="2024-2025" title="Featured Works" />
              <Projects/>
              <About/>
              <Contact />
              <Footer />
            </>
          }/>
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<WorksDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App