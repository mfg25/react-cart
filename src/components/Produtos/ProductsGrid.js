import React, { useEffect, useState } from "react";
import decorativosExport from "../assets/products/decorativos/export";

import residencialExport from "../assets/products/residencial/residencialExport";
import { Link } from "react-router-dom";
const ProductsGrid = (props) => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    if (props.type === "decorativos") setProductArray(decorativosExport());
    if (props.type === "residencial") setProductArray(residencialExport());
  }, [props]);

  return (
    <div className="products-grid">
      {productArray.map((product) => {
        console.log(productArray);
        return (
          <Link to={`/produtos/${props.type}/${product.id}`} key={product.id}>
            <div className="product-container">
              <img alt={product.name} src={product.images[0]} />
              <div className="caption">{product.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
