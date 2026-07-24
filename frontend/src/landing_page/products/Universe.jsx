import React from "react";

function Universe() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center text-muted text-sm mt-5">
        <div className="col-4">
          <img src="assets/smallcaseLogo.png" />
          <p className="mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4">
          <img src="assets/streakLogo.png" style={{ width: "35%" }} />
          <p className="mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4">
          <img src="assets/sensibullLogo.svg" style={{ width: "55%" }} />
          <p className="mt-4">Options trading platform</p>
        </div>
      </div>
      <div className="row text-center text-muted text-sm mt-5">
        <div className="col-4">
          <img src="assets/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="mt-3">Asset management</p>
        </div>
        <div className="col-4">
          <img src="assets/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4">
          <img src="assets/dittoLogo.png" style={{ width: "30%" }} />
          <p className="mt-4">Insurance</p>
        </div>
      </div>
      <div className="row">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
