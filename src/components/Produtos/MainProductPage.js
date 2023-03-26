import React from "react";
import "./MainProductPage.css";
import SideProductBar from "./SideProductBar.js";
import ProductsGrid from "./ProductsGrid";
const MainProductPage = (props) => {
  return (
    <main id="main-product-page">
      {console.log(props)}
      <SideProductBar />
      <ProductsGrid type={props.type} />
    </main>
  );
};

export default MainProductPage;
