import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useParams, useLocation } from "react-router-dom";
import decorativosExport from "../assets/products/decorativos/export";
import "./ProductsDetails.css";
import mlIcon from "../assets/ml-icon.png";
const ProductsDetails = (props) => {
  const id = useParams();
  const [product, setProduct] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    let array = [];
    if (props.type === "decorativos") array = decorativosExport();
    array.forEach((element) => {
      if (element.id === id.id) {
        setProduct(element);
        setMainImage(element.images[0]);
      }
    });
  }, []);

  const selectImage = (e) => {
    let element = e.target.parentElement;
    setMainImage(e.target.src);
    Array.from(document.getElementsByClassName("image-container")).forEach(
      (image) => {
        image.classList.remove("selected-image");
      }
    );
    if (element.classList.contains("image-container")) {
      element.classList.add("selected-image");
    }
  };

  return (
    <div className="Home">
      <Header />
      <main id="products-details-main">
        <section className="main-content-wrapper">
          <div className="images-wrapper">
            <div className="images-selector">
              {product
                ? product.images.map((image) => {
                    return (
                      <div
                        className="image-container"
                        onClick={(e) => selectImage(e)}
                      >
                        <img src={image} className="hover-images-selector" />
                      </div>
                    );
                  })
                : 0}
            </div>
            <div className="main-image-wrapper">
              <img className="main-image" src={product ? mainImage : 0} />
            </div>
          </div>
          <section className="description">
            <h2 className="product-name">{product ? product.name : 0}</h2>
            <h3>Descrição:</h3>
            <p className="description-text">
              A Lâmpada Decorativa Retro Vintage Âmbar Filamento Led G80 E27 é
              uma lâmpada com estilo retrô e tecnologia LED, com formato
              esférico, cor âmbar e filamento exposto. Ideal para decoração de
              ambientes, oferece eficiência energética e encaixe padrão E27.
            </p>
            <table>
              <tr>
                {product
                  ? product.tableData.map((data) => {
                      return <th>{data[0]}</th>;
                    })
                  : 0}
              </tr>
              <tr>
                {product
                  ? product.tableData.map((data) => {
                      return <td>{data[1]}</td>;
                    })
                  : 0}
              </tr>
            </table>
            <a href={product ? product.productLink : 0} target="_blank">
              <button className="redirect-button">
                Ver anúncio <img src={mlIcon} />
              </button>
            </a>
          </section>
        </section>
      </main>
    </div>
  );
};

export default ProductsDetails;
