import React from "react";
import logo from "../images/logo.png";
import "./Header.css";

function Header () {
    return (
        <>
        <div className="App-header">
            <img src={logo} alt="checklistly-logo" className="logo" />
        </div>
        </>
    ); 
}

export default Header;