import React from "react";
import Header from "../Header/Header";
import MainProductPage from "./MainProductPage";
import Footer from "../Footer/Footer";

const Produtos = (props) => {
  return (
    <div className="Home">
      <Header />
      <MainProductPage type={props.type} />
      <Footer />
    </div>
  );
};

export default Produtos;
