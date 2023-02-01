import React, { Component } from "react";
import {IoIosFingerPrint} from "react-icons/io";

const Header = () => {
    return (
      <>
        <div className="header">
          <a href="/" className="navLink">
            <h3 style={{ marginLeft: "40px", marginTop: "5px", marginBottom: "20px"}}><IoIosFingerPrint /> Contractscan.io</h3>
          </a>
          <a href="/GenerateSummary" className="navLink">
            <h5 style={{ marginRight: "40px", marginTop: "5px", marginBottom: "20px"}}>Generate Summary</h5>
          </a>
        </div>
      </>
    );
}

export default Header;