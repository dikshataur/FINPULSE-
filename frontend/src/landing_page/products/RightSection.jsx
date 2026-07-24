import React from "react";

function RightSection({
  productName,
  productDesc,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container">
      <div className="product-section">
        <div className="product-description">
          <h2>{productName}</h2>

          <p>{productDesc}</p>

          <a href={learnMore}>
            Learn More <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div>
          <img
            src={imageUrl}
            alt={productName}
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;