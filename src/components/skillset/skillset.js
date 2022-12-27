import "./skillset.css";
import webDevelopment from "./webDevelopment.png";
import QAimage from "./QA.png";
import { forwardRef } from "react";

const Skillset = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="wholeSkillSetSection">
      <div className="skillSetSection">
        <h1 className="skillsetWord">MY SKILLS</h1>
        <div className="skills">
          <div>
            <img
              src={webDevelopment}
              alt="Web development Icon"
              className="webIcon"
            />
            <h4>Web Development</h4>
            <p className="p">
              React, Node Js & Mongodb are the main tools I use for web
              development. Although I am highly adaptable so I will definitely
              be open to work with different technologies.
            </p>
          </div>
          <div>
            <img src={QAimage} alt="Web development Icon" className="QAIcon" />
            <h4>Quality Assurance Engineer</h4>
            <p>
              I specialize on creating Test Strategy, Test Plan, Test cases, API
              testing with postman,and Automation testing with Cypress and WebDriver-IO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skillset;
