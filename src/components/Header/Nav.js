import React, { useState } from "react";
import { Link } from "react-router-dom";
import navIcon from "../assets/nav.png";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="header-nav">
      <div className="nav-wrapper">
        <Link to="/">
          <div className="links">HOME</div>
        </Link>
        <Link to="/produtos">
          <div className="links">PRODUTOS</div>
        </Link>
        <Link to="/informações">
          <div className="links">INFORMAÇÕES</div>
        </Link>
      </div>
      <img src={navIcon} alt="nav" className="nav-icon" onClick={changeState} />
      <div
        className="mobile-nav-wrapper"
        style={toggle ? { display: "flex" } : { display: "none" }}
      >
        <Link to="/">
          <div className="links">HOME</div>
        </Link>
        <Link to="/produtos">
          <div className="links">PRODUTOS</div>
        </Link>
        <Link to="/contato">
          <div className="links">CONTATO</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
