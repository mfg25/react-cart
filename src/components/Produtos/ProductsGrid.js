import React, { useState } from "react";
import shirtExport from "../assets/products/shirts/shirtExport";
const ProductsGrid = () => {
  const [productArray, setProductArray] = useState(shirtExport());
  return (
    <div className="products-grid">
      {productArray.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <img alt={product.name} src={product.image} />
            <div className="caption">
              <i>{product.name}</i>
              <h5>R${product.price},00</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
