import React from "react";
import "./Navbar.css";
import Logo from "assets/images/Logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as Bar } from "assets/images/bar.svg";
import { ReactComponent as Sun } from "assets/images/sun.svg";
import { ReactComponent as Dot } from "assets/images/dot.svg";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container-wrapper">
        <div className="navbar">
          <Link className="nav-logo" to="/">
            <img src={Logo} alt="" />
          </Link>

          <div className="navbar-right">
            <div className="navbar-hamburger pointer">
              <Bar />
            </div>
            <div className="pointer">
              <Sun />
            </div>
            <div className="pointer">
              <Dot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
