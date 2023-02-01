import React from "react";
import {IoIosFingerPrint} from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className="header">
          <Link to="/" className="navLink">
            <h3 style={{ marginLeft: "40px", marginTop: "5px", marginBottom: "20px"}}><IoIosFingerPrint /> Contractscan.io</h3>
          </Link>
          <Link to="/GenerateSummary" className="navLink">
            <h5 style={{ marginRight: "40px", marginTop: "5px", marginBottom: "20px"}}>Generate Summary</h5>
          </Link>
        </div>
      </>
    );
}

export default Header;