import "./aboutMe.css";
import myImage from "./imagenDePerfil.jpg";

 const AboutMe = () => {
  return (
    <section className="whole-about-us">
      <div className="about-us">



      <div className="image-side">
        <figure className="snip1113">
          <img
            src={myImage}
            alt="Roberto Soto Image"
          />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          cumque libero quod debitis fugiat vero quae facilis optio
          reprehenderit, minus, praesentium aperiam modi explicabo quas officiis
          nam voluptatibus commodi harum! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquid, perferendis et? Ullam
          voluptatum vel aspernatur aperiam dignissimos. Beatae animi at, quo ut
          sapiente totam hic explicabo accusamus rem fugit perferendis.
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
        <button className="my-cv">My CV</button>
      </div> 




      </div>


     
    </section>
  );
};

export default AboutMe;
