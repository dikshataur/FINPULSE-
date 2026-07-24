import React from "react";

function Hero() {
  return (
    <div className="container pricing-hero">
      <div className="pricing-heading">
        <h2>Pricing</h2>

        <p>
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="pricing-plans">
        <div className="pricing-plan">
          <img
            src="/assets/pricingEquity.svg"
            alt="Equity Delivery"
          />

          <h3>Free equity delivery</h3>

          <p>
            All equity delivery investments (NSE, BSE), are absolutely free -
            ₹0 brokerage.
          </p>
        </div>

        <div className="pricing-plan">
          <img
            src="/assets/intradayTrades.svg"
            alt="Intraday Trades"
          />

          <h3>Intraday and F&O trades</h3>

          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="pricing-plan">
          <img
            src="/assets/pricingEquity.svg"
            alt="Direct Mutual Funds"
          />

          <h3>Free direct MF</h3>

          <p>
            All direct mutual fund investments are absolutely free - ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;