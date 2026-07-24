import React from "react";

function Footer() {
  return (
    <footer
      className="border-top mt-5"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col">
            <img
              src="assets/logo.svg"
              className="mb-3"
              style={{ width: "50%" }}
            />
            <p style={{ fontSize: "14px" }}>
              {" "}
              &copy; 2010-2024, Not FunPulse Broking Ltd. <br /> All rights
              reserved.
            </p>
            <div className="text-muted fs-5 d-flex flex-row gap-2 mt-4">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col">
            <p className="pb-3">Company</p>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              About
            </a>
            <a
              href=""
              className="text-muted text-decoration-none d-block mb-3"
              text-decoration-none
            >
              Products
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Pricing
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Referral programme
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Careers
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Zerodha.tech
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Press & media
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Zerodha cares (CSR)
            </a>
          </div>
          <div className="col">
            <p className="pb-3">Support</p>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Contact
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Support portal
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Z-Connect blog
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              List of charges
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Downloads & resources
            </a>
          </div>
          <div className="col">
            <p className="pb-3">Account</p>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Open an account
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              Fund transfer
            </a>
            <a href="" className="text-muted text-decoration-none d-block mb-3">
              60 day challenge
            </a>
          </div>
        </div>
        <div className="row mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="d-flex gap-5 py-4 justify-content-center">
            <a href="" className="text-muted text-decoration-none">
              NSE
            </a>
            <a href="" className="text-muted text-decoration-none">
              BSE
            </a>
            <a href="" className="text-muted text-decoration-none">
              MCX
            </a>
            <a href="" className="text-muted text-decoration-none">
              Terms & conditions
            </a>
            <a href="" className="text-muted text-decoration-none">
              Policies & procedures
            </a>
            <a href="" className="text-muted text-decoration-none">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
