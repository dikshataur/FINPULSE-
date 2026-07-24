import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 text-center border-bottom">
        <h2>Pricing</h2>
        <p className="text-muted mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row text-center d-flex gap-5 p-5">
        <div className="col p-5">
          <img src="assets/pricingEquity.svg" />
          <h3>Free equity delivery</h3>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free - ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="assets/intradayTrades.svg" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-3">
           Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="assets/pricingEquity.svg" />
          <h3>Free direct MF</h3>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free - ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
