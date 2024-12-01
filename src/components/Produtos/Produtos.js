import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import MainProductPage from "./MainProductPage";
import Footer from "../Footer/Footer";

const Produtos = () => {
  // Captura o parâmetro 'type' da URL
  const { type } = useParams();
  return (
    <div className="Home">
      <Header />
      <MainProductPage type={type} />
      <Footer />
    </div>
  );
};

export default Produtos;
