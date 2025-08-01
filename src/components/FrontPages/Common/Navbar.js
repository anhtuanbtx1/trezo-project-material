"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Updated to use `useLocation`

const Navbar = () => {
  const { pathname } = useLocation(); // Extract the current pathname using `useLocation`

  const [isToggleNavbar, setToggleNavbar] = useState(true);

  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("sticky");
      } else {
        elementId.classList.remove("sticky");
      }
    });
  });

  return (
    <div id="navbar" className="fp-navbar-area transition">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo-big.svg"
              alt="logo"
              width={142}
              height={38}
            />
            <img
              src="/images/white-logo-big.svg"
              className="d-none"
              alt="logo"
              width={142}
              height={38}
            />
          </Link>

          <button className="navbar-toggler" onClick={handleToggleNavbar}>
            <span className="burger-menu">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isToggleNavbar ? "" : "show"
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/features/"
                  className={`nav-link ${
                    pathname === "/features/" ? "active" : ""
                  }`}
                >
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/team/"
                  className={`nav-link ${
                    pathname === "/team/" ? "active" : ""
                  }`}
                >
                  Our Team
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/faq/"
                  className={`nav-link ${pathname === "/faq/" ? "active" : ""}`}
                >
                  FAQ's
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact/"
                  className={`nav-link ${
                    pathname === "/contact/" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <a href="/dashboard/ecommerce/" className="nav-link">
                  Admin
                </a>
              </li>
            </ul>

            <div className="other-options">
              <Link to="/authentication/sign-in/" className="fp-outlined-btn">
                <i className="material-symbols-outlined">login</i>
                Login
              </Link>

              <Link to="/authentication/sign-up/" className="fp-btn">
                <i className="material-symbols-outlined">person</i>
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
