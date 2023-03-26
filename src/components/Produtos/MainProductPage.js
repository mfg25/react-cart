import React from "react";
import "./MainProductPage.css";
import SideProductBar from "./SideProductBar.js";
import ProductsGrid from "./ProductsGrid";
const MainProductPage = () => {
  return (
    <main id="main-product-page">
      <SideProductBar />
      <ProductsGrid />
    </main>
  );
};

export default MainProductPage;
