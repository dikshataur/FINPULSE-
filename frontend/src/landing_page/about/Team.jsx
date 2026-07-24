import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="team-section">
        <h1 className="team-title">People</h1>

        <div className="team-content">
          <div className="team-member">
            <img
              src="/assets/nithinKamath.jpg"
              alt="Nithin Kamath"
            />

            <h4>Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>

          <div className="team-description">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>

            <p>
              Connect on <a href="">Homepage</a> /{" "}
              <a href="">TradingQnA</a> / <a href="">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;