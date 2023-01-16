import { forwardRef, useRef } from "react";
import "./aboutMe.css";
import myImage from "./imagenDePerfil.jpg";

const AboutMe = forwardRef((props, ref) => {
  let handleScrollIntoView = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="whole-about-us">
      <div className="about-us">
        <div className="image-side">
          <figure className="snip1113">
            <img src={myImage} alt="Roberto Soto Image" />
            <figcaption>
              <h3>
                Roberto <span>Soto</span>
              </h3>
              <h4>Engineer</h4>
            </figcaption>
          </figure>
        </div>
        <div className="information-side">
          <h1>Roberto Soto</h1>
          <h4>Software Engineer</h4>
          <p>
            Hello, Thanks for visiting my portfolio! <br></br>
            <br></br>
            Either if you are here to check my profile or you are just wandering
            around and for some random reason you ended up here, please feel
            free to know a little bit more about me.<br></br>
            <br></br>I am an Industrial and Software Engineer working on the tech industry, Currently as a
            Software Quality Assurance Engineer, I specialize on Creating test
            plan, test strategy, Functional testing, UI testing,
            Regression/Smoke test and so much more, I am as well into automation
            with Cypress, puppeteer and webdriver-io.
            <br></br>
            <br></br> In a pursue of improvement I am actively doing Web
            Development, Mainly working with React & Node Js and I am highly
            proficient with HTML & CSS. As well I have use MongoDB in several
            projects. You can check my work
            <a
              onClick={() => {
                handleScrollIntoView(props.refs);
              }}
              className="link"
            >
              {" "}
              here.
            </a>
          </p>

          <div className="curriculum">
            <div className="cvInfo">
              <h4>Name </h4>
              <div>Roberto Soto</div>
            </div>
            <div className="cvInfo">
              <h4>Email</h4>
              <div style={{ fontSize: "1.3rem" }}>
                roberto-soto.com@hotmail.com
              </div>
            </div>
            <div className="cvInfo">
              <h4>Age </h4>
              <div>27</div>
            </div>
            <div className="cvInfo">
              <h4>Phone</h4>
              <div>+50497987882</div>
            </div>
            <div className="cvInfo">
              <h4>Job </h4>
              <div>Software Engineer</div>
            </div>
            <div className="cvInfo">
              <h4>From </h4>
              <div>Honduras</div>
            </div>
          </div>
          {/* href="https://drive.google.com/file/d/1v1IsJkYWsJUGZmhQMBwPHZFsUjCtQG55/view?usp=sharing" */}
          <a className="my-cv" href="https://drive.google.com/file/d/1v1IsJkYWsJUGZmhQMBwPHZFsUjCtQG55/view?usp=sharing" target="_blank">My CV</a>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
