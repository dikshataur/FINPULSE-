import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 d-flex gap-5 border-tp">
        <div className="col p-5">
          <img src={imageUrl} />
        </div>
        <div className="col p-5">
          <h2>{productName}</h2>
          <p>{productDesc}</p>
          <div className="d-flex gap-4 my-4">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i class="fa-solid fa-arrow-right-long"> </i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i class="fa-solid fa-arrow-right-long"> </i>
            </a>
          </div>
          <div className="d-flex gap-4">
            <a href=''>
              <img src={googlePlay} alt="Google Play"/>
            </a>
            <a href=''>
              <img src={appStore} alt="Google Play"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
