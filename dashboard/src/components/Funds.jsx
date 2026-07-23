import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds-top">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <Link className="btn btn-green">Add funds</Link>

        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="funds-layout">
        <div className="funds-equity">
          <div className="funds-heading">
            <i class="fa-regular fa-clock"></i>
            <p>Equity</p>
          </div>

          <div className="funds-table">
            <div className="funds-data funds-important">
              <p>Available margin</p>
              <p className="colored">4,043.10</p>
            </div>

            <div className="funds-data funds-important">
              <p>Used margin</p>
              <p>3,757.30</p>
            </div>

            <div className="funds-data funds-important">
              <p>Available cash</p>
              <p>4,043.10</p>
            </div>

            <hr />

            <div className="funds-data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>

            <div className="funds-data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>

            <div className="funds-data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>

            <div className="funds-data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="funds-data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="funds-data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="funds-data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="funds-data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>

            <div className="funds-data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="funds-data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="funds-commodity">
          <p>You don't have a commodity account</p>

          <Link className="btn btn-blue">Open Account</Link>
        </div>
      </div>
    </>
  );
};

export default Funds;