import React from "react";
import Header from "../Header/Header";
import MainProductPage from "./MainProductPage";

const Produtos = (props) => {
  return (
    <div className="Home">
      {console.log(props)}
      <Header />
      <MainProductPage type={props.type} />
    </div>
  );
};

export default Produtos;
