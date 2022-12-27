import smashHouse from "./smashhouse.png";
import ranking from "./ranking.png";
import "./proyects.css";
import { forwardRef } from "react";

const Proyects = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="wholeProyectSection">
      <div className="proyectSection">
        <h1 className="myProyectWord">MY PORTFOLIO</h1>
        <div className="proyects">
          <div>
            <img
              src={smashHouse}
              alt="Web development Icon"
              className="smashHouse"
            />
            <a href="https://rsoto95.github.io/" target="_blank">Smash House Arena (Landing page)</a>

            <p>Landing page for Honduras Smash community.</p>
          </div>

          <div >
            <img
              src={ranking}
              alt="Web development Icon"
              className="smashHouseRanking"
            />
            <a href="https://rsoto95.github.io/#/Ranking" target="_blank">Smash House Arena (Ranking)</a>

            <p>
              Ranking system for Smash community that is connected directly to{" "}
              <a target="_blank" href="www.start.gg">start.gg</a> API, The backend has the
              algorithm to fetch the data from start.gg and to provide the
              respective scores to each one of the players, then all is sumed up
              and presented on the front end. This is all done using React, Express and Mongodb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Proyects;
