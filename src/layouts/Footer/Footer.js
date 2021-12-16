import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container-wrapper">
        <div className="footer">
          <div className="footer-left">
            <p className="fs-14px font-monument-regular black">Impressum</p>
            <p className="fs-14px font-monument-regular black">Datenschutz</p>
            <p className="fs-14px font-monument-regular black">AGBs</p>
            <p className="fs-14px font-monument-regular black">Cookies</p>
          </div>
          <div className="footer-right">
            <p className="fs-14px font-monument-regular black">
              © climeight.de
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
