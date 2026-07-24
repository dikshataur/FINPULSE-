import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="assets/education.svg" style={{ width: "70%" }} />
        </div>

        <div className="col-6">
          <h2 className="mb-5">Free and open market education</h2>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity<i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
