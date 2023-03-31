import React, { useEffect, useState } from "react";
import decorativosExport from "../assets/products/decorativos/export";
import pantsExport from "../assets/products/pants/pantsExport";
import capsExport from "../assets/products/caps/capsExport";
import shortsExport from "../assets/products/shorts/shortsExport";
import { Link } from "react-router-dom";
const ProductsGrid = (props) => {
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    if (props.type === "decorativos") setProductArray(decorativosExport());
    if (props.type === "pants") setProductArray(pantsExport());
    if (props.type === "caps") setProductArray(capsExport());
    if (props.type === "shorts") setProductArray(shortsExport());
  }, [props]);

  return (
    <div className="products-grid">
      {productArray.map((product) => {
        console.log(productArray);
        return (
          <Link to={`/produtos/decorativos/${product.id}`} key={product.id}>
            <div className="product-container">
              <img alt={product.name} src={product.images[0]} />
              <div className="caption">
                <i>{product.name}</i>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
