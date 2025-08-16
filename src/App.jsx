import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//global
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//landing-page
import Landing from "./Components/Landing/Landing";
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
import Cursor from "./Components/Cursor/Cursor";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
      <>
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<WorksDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Cursor />
      </Router>
      </>

  )
}

export default App