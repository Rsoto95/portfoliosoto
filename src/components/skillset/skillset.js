import "./skillset.css";
import webDevelopment from "./webDevelopment.png";
import QAimage from "./QA.png";

const Skillset = () => {
  return (
    <section className="wholeSkillSetSection" >
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laudantium, dolores adipisci odio vel repudiandae maxime corrupti
              aut voluptates, praesentium incidunt laborum, error nobis. Totam,
              ipsam consectetur. Sequi, laboriosam et.
            </p>
          </div>
          <div>
            <img src={QAimage} alt="Web development Icon" className="QAIcon" />
            <h4>Quality Assurance Engineer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laudantium, dolores adipisci odio vel repudiandae maxime corrupti
              aut voluptates, praesentium incidunt laborum, error nobis. Totam,
              ipsam consectetur. Sequi, laboriosam et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
