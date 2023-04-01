import React from "react";
import { Link } from "react-router-dom";

const SideProductBar = () => {
  return (
    <nav id="product-bar">
      <Link to="/produtos/decorativos">
        <div className="link-sidebar">
          <h5>LINHA DECORATIVA</h5>
        </div>
      </Link>
      <Link to="/produtos/residencial">
        <div className="link-sidebar">
          <h5>LINHA RESIDENCIAL</h5>
        </div>
      </Link>
      <Link to="/produtos/industrial">
        <div className="link-sidebar">
          <h5>LINHA INDUSTRIAL</h5>
        </div>
      </Link>
    </nav>
  );
};

export default SideProductBar;
