import React from "react";

function Hero() {
  return (
    <section className="container-fluid mt-5 mb-5" id="supportHero">
      <div className="container pt-5">
        <div id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
        </div>
        <div className="row p-5">
          <div className="col-7 p-5">
            <h2 className="mb-4">Search for an answer or browse help topics to create a ticket</h2>
            <input  className="mb-3" placeholder="Eg. how do I activate F&O, why is my order getting rejected.." /><br/>
             <a href="">Track account opening</a>
             <a href="">Track segment activation</a>
             <a href="">Intraday margins</a>
             <a href="">Kite user manual</a>
          </div>
          <div className="col-5 p-5">
            <h2>Featured</h2>
            <ol>
              <li className="mt-3"><a href="">Current Takeovers and Delisting - January 2024</a></li>
              <li className="mt-4"><a href="">Current Takeovers and Delisting - January 2024</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
