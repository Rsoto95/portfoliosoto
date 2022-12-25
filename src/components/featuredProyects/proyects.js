import smashHouse from "./smashhouse.png";
import ranking from "./ranking.png";
import "./proyects.css";

const Proyects = () => {
  return (
    <section className="wholeProyectSection">
      <div className="proyectSection">
        <h1 className="myProyectWord">MY PORTFOLIO</h1>
        <div className="proyects">
          <div>
            <img
              src={smashHouse}
              alt="Web development Icon"
              className="smashHouse"
            />
            <h4>Smash House Arena (Landing page)</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laudantium, dolores adipisci odio vel repudiandae maxime corrupti
              aut voluptates, praesentium incidunt laborum, error nobis. Totam,
              ipsam consectetur. Sequi, laboriosam et.
            </p>
          </div>

          <div>
            <img
              src={ranking}
              alt="Web development Icon"
              className="smashHouseRanking"
            />
            <h4>Smash House Arena (Ranking)</h4>

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

export default Proyects;
