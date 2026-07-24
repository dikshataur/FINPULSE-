import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="assets/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>

        <form className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-5">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/product"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
            <li className="nav-item pt-2 mx-2">
              <Link to="/login" className="text-dark text-decoration-none">
                Login
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
