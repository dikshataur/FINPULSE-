import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center">
        <h2 className="mt-5 mb-4">Technology</h2>
        <h5 className="pb-2 text-muted mb-3">
          Sleek, modern and intuitive trading platforms
        </h5>
        <p>
            Check out our <a className="text-decoration-none">
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
           </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
