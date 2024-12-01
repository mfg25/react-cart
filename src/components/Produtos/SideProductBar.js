import React from "react";
import { Link } from "react-router-dom";

const SideProductBar = () => {
  return (
    <nav id="product-bar">
      <Link to="/produtos/instrumento">
        <div className="link-sidebar">
          <h5>INSTRUMENTOS</h5>
        </div>
      </Link>
      <Link to="/produtos/equipamento">
        <div className="link-sidebar">
          <h5>EQUIPAMENTOS</h5>
        </div>
      </Link>
    </nav>
  );
};

export default SideProductBar;
