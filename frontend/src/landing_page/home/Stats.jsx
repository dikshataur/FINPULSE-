import React from "react";

function Stats() {
  return (
    <section className="container stats-section">
      <div className="stats-content">
        <div className="stats-text">
          <h2>Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
            crores worth of equity investments.
          </p>

          <h5>No spam or gimmicks</h5>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5>The Zerodha universe</h5>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div>
          <img
            src="/assets/ecosystem.png"
            alt="Ecosystem"
            className="ecosystem-image"
          />

          <div className="stats-links">
            <a href="">
              Explore our products <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;