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
      <div className="product-section">
        <div>
          <img
            src={imageUrl}
            alt={productName}
            className="product-image"
          />
        </div>

        <div className="product-description">
          <h2>{productName}</h2>
          <p>{productDesc}</p>

          <div className="product-links">
            <a href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="app-badges">
            <a href="">
              <img src={googlePlay} alt="Google Play" />
            </a>

            <a href="">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;