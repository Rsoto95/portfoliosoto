import smashHouse from "./smashhouse.png";
import ranking from "./ranking.png";
import qrCode from "./images/desktop-design.jpg"
import newsWebsite from "./images/newsWebsite.jpg"
import "./proyects.css";
import { forwardRef } from "react";

const Proyects = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="wholeProyectSection">
      <div className="proyectSection">
        <h1 className="myProyectWord">MY PORTFOLIO</h1>
        <div className="proyects">
          {/* Esto es un proyecto */}
          <div className="proyect">
            <img
              src={smashHouse}
              alt="Web development Icon"
              className="smashHouse"
            />
            <a href="https://rsoto95.github.io/" target="_blank">
              Smash House Arena (Landing page)
            </a>

            <p>Landing page for Honduras Smash community.</p>
          </div>
          {/* Aqui termina le proyecto */}

          {/* Esto es un proyecto */}

          <div className="proyect">
            <img
              src={ranking}
              alt="Web development Icon"
              className="smashHouseRanking"
            />
            <a href="https://rsoto95.github.io/#/Ranking" target="_blank">
              Smash House Arena (Ranking)
            </a>

            <p>
              Ranking system for Smash community that is connected directly to{" "}
              <a target="_blank" href="www.start.gg">
                start.gg
              </a>{" "}
              API, The backend has the algorithm to fetch the data from start.gg
              and to provide the respective scores to each one of the players,
              then all is sumed up and presented on the front end. This is all
              done using React, Express and Mongodb
            </p>
          </div>

          {/* Aqui termina le proyecto */}

             {/* Esto es un proyecto */}

             <div className="proyect">
            <img
              src={qrCode}
              alt="Web development Icon"
              className="smashHouseRanking"
            />
            <a href="https://jocular-chebakia-532723.netlify.app/" target="_blank">
              QR Code Scanner
            </a>

            <p>
              Frontend Mentor challenge for a quick QR code website.
            </p>
          </div>

          {/* Aqui termina le proyecto */}


      {/* Esto es un proyecto */}

      <div className="proyect">
            <img
              src={newsWebsite}
              alt="Web development Icon"
              className="smashHouseRanking"
            />
            <a href="https://ornate-cactus-2b550e.netlify.app/" target="_blank">
            News Landing Page
            </a>

            <p>
              Frontend Mentor challenge for a news landing page created with HTML & CSS flex with a little bit of JS.
            </p>
          </div>

          {/* Aqui termina le proyecto */}

        </div>
      </div>
    </section>
  );
});

export default Proyects;
