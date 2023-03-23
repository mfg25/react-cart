import React from "react";
import logo from "./assets/rx_logo.png";
import "./Header.css";
import Nav from "./Nav";
const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Rexpeita"></img>
      <Nav />
    </header>
  );
};

export default Header;
