import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import AboutMe from "./components/aboutMe/aboutMe";
import Skillset from "./components/skillset/skillset";
import Proyects from "./components/featuredProyects/proyects";
import Contact from "./components/contactMe/contactMe";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skillset />
      <Proyects />
      <Contact/>
    </div>
  );
}

export default App;
