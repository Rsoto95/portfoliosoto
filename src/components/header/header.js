import "./header.css";

const Header = () => {
  return (
    <section>
      <div className="opacity">
        <div className="header-container">
          <div className="name">Roberto Soto</div>
          <nav className="nav-bar">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Services</ul>
            <ul>Portfolio</ul>
            <ul>Contact</ul>
          </nav>
        </div>
        <div className="hero-banner">
          <div className="text-hero-banner">
            <div>
            <h3>Software Engineer</h3>

              <h1>Hi! I am Roberto Soto</h1>
              <h4>Versatile programmer that never stops grinding.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
