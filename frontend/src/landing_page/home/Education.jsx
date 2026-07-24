import React from "react";

function Education() {
  return (
    <section className="container education-section">
      <div className="education-content">
        <div>
          <img
            src="/assets/education.svg"
            alt="Education"
            className="education-image"
          />
        </div>

        <div>
          <h2>Free and open market education</h2>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;