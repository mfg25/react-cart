import React, { useEffect, useState } from "react";
import shirtExport from "../assets/products/shirts/shirtExport";
import pantsExport from "../assets/products/pants/pantsExport";
const ProductsGrid = (props) => {
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    if (props.type === "shirts") setProductArray(shirtExport());
    if (props.type === "pants") setProductArray(pantsExport());
  }, [props]);

  return (
    <div className="products-grid">
      {productArray.map((product) => {
        console.log(productArray);
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
