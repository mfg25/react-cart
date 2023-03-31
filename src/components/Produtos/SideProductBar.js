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
      {/* <Link to="/produtos/calças">
        <div className="link-sidebar">
          <h5>CALÇAS</h5>
        </div>
      </Link>
      <Link to="/produtos/bonés">
        <div className="link-sidebar">
          <h5>BONÉS</h5>
        </div>
      </Link>
      <Link to="/produtos/shorts">
        <div className="link-sidebar">
          <h5>SHORTS</h5>
        </div>
      </Link> */}
    </nav>
  );
};

export default SideProductBar;
