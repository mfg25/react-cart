import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <div className="links">HOME</div>
      </Link>
      <Link to="/produtos">
        <div className="links">PRODUTOS</div>
      </Link>
      <Link to="/contato">
        <div className="links">CONTATO</div>
      </Link>
    </nav>
  );
};

export default Nav;
