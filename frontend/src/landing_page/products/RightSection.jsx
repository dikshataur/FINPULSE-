import React from "react";

function RightSection({productName, productDesc, learnMore, imageUrl}) {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 d-flex gap-5">
        <div className="col p-5">
          <h2>{productName}</h2>
          <p>{productDesc}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn More <i class="fa-solid fa-arrow-right-long"> </i>
          </a>
        </div>
        <div className="col p-5">
          <img src={imageUrl}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
