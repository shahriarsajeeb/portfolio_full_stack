import React from 'react'
import "./App.scss";
import "./responsive.scss";
import Header from "../src/components/Layout/Header";
import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Skills from "../src/components/Skills/Skills";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Testimonials from "../src/components/Testimonials/Testimonials";
import Contact from "../src/components/Contact/Contact";

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Testimonials />
    <Contact />
    </>
  )
}

export default App