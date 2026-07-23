import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <img src="assets/largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and inversting in:
          </p>
          <div className="row mb-3">
            <div className="col-6">
              <ul>
                <li className="mb-3">Futures and Options</li>
                <li className="mb-3">Commodity derivaties</li>
                <li className="mb-3">Currency derivaties</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-3">Stock & IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="assets/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
