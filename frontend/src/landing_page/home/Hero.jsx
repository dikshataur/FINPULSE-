import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="container home-hero">
      <img
        src="/assets/homeHero.png"
        alt="Hero"
        className="home-hero-image"
      />

      <h2>Invest in everything</h2>

      <p>
        Online platform to invest in stocks, derivatives, mutual funds, and
        more
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="btn btn-primary fs-5 signup-btn"
      >
        Signup now
      </button>
    </section>
  );
}

export default Hero;