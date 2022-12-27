import React, { createRef, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import AboutMe from "./components/aboutMe/aboutMe";
import Skillset from "./components/skillset/skillset";
import Proyects from "./components/featuredProyects/proyects";
import Contact from "./components/contactMe/contactMe";

function App() {
  const aboutMeRef = useRef();
  const skillSetRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const refs = { aboutMeRef, skillSetRef, portfolioRef, contactRef };

  return (
    <div className="whole-app">
      <Header refs={refs} />
      <AboutMe ref={aboutMeRef} refs={portfolioRef}/>
      <Skillset ref={skillSetRef} />
      <Proyects ref={portfolioRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
