import React from "react";

function Pricing() {
  return (
    <section className="container pricing-section">
      <div className="pricing-content">
        <div className="pricing-description">
          <h2>Unbeatable pricing</h2>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h1>₹0</h1>
            <p>
              Free equity delivery and direct mutual funds
            </p>
          </div>

          <div className="pricing-card">
            <h1>₹20</h1>
            <p>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;