import React from "react";

function Awards() {
  return (
    <section className="container awards-section">
      <div className="awards-content">
        <div>
          <img
            src="/assets/largestBroker.svg"
            alt="Largest Broker"
            className="awards-image"
          />
        </div>

        <div>
          <h2>Largest stock broker in India</h2>

          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="awards-lists">
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          <img
            src="/assets/pressLogos.png"
            alt="Press Logos"
            className="press-logos"
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;