import React from "react";
import logo from "../assets/rx_logo.png";
import "./Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Lar do Som" className="logo-icon"></img>
      <Nav />
    </header>
  );
};

export default Header;
