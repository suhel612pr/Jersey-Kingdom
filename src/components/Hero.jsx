import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="tagline">OFFICIAL FOOTBALL KITS</p>

        <h1>Jersey Kingdom</h1>

        <p>
          Shop the latest football jerseys from top clubs and national teams.
          Premium quality kits for true football fans.
        </p>

        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;