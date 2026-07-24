import React from "react";

function Universe() {
  return (
    <div className="container universe-section">
      <div className="universe-heading">
        <h2>The Zerodha Universe</h2>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="universe-grid">
        <div className="universe-item">
          <img src="/assets/smallcaseLogo.png" alt="Smallcase" />
          <p>Thematic investment platform</p>
        </div>

        <div className="universe-item">
          <img src="/assets/streakLogo.png" alt="Streak" />
          <p>Algo & strategy platform</p>
        </div>

        <div className="universe-item">
          <img src="/assets/sensibullLogo.svg" alt="Sensibull" />
          <p>Options trading platform</p>
        </div>

        <div className="universe-item">
          <img src="/assets/zerodhaFundhouse.png" alt="Fund House" />
          <p>Asset management</p>
        </div>

        <div className="universe-item">
          <img src="/assets/goldenpiLogo.png" alt="GoldenPi" />
          <p>Bonds trading platform</p>
        </div>

        <div className="universe-item">
          <img src="/assets/dittoLogo.png" alt="Ditto" />
          <p>Insurance</p>
        </div>
      </div>

      <button className="btn btn-primary universe-signup">
        Sign up now
      </button>
    </div>
  );
}

export default Universe;