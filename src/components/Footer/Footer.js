import React from "react";
import "./Footer.css";
import mlIcon from "../assets/ml-icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <main className="main-informações">
        <a href="https://eshops.mercadolivre.com.br/shoppled" target="_blank">
          <h2>Loja Mercado Livre</h2>
          <img src={mlIcon}></img>
        </a>
      </main>
    </div>
  );
};

export default Footer;
