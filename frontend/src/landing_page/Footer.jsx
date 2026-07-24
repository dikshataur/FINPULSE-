import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-top">

          <div>
            <img
              src="/assets/logo.svg"
              alt="FinPulse Logo"
              className="footer-logo"
            />

            <p className="footer-copyright">
              &copy; 2010-2024, Not FunPulse Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="footer-social">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div className="footer-column">
            <h6>Company</h6>

            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Pricing</a>
            <a href="">Referral programme</a>
            <a href="">Careers</a>
            <a href="">FinPulse.tech</a>
            <a href="">Press & media</a>
            <a href="">FinPulse cares (CSR)</a>
          </div>

          <div className="footer-column">
            <h6>Support</h6>

            <a href="">Contact</a>
            <a href="">Support portal</a>
            <a href="">Z-Connect blog</a>
            <a href="">List of charges</a>
            <a href="">Downloads & resources</a>
          </div>

          <div className="footer-column">
            <h6>Account</h6>

            <a href="">Open an account</a>
            <a href="">Fund transfer</a>
            <a href="">60 day challenge</a>
          </div>

        </div>

        <div className="footer-details">
          <p>
            FinPulse Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633. Investments in securities market are subject to market
            risks; read all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers.
          </p>

          <p>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others.
          </p>

          <div className="footer-links">
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">Terms & conditions</a>
            <a href="">Policies & procedures</a>
            <a href="">Privacy policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;