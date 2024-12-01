import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./ProductsDetails.css";
import { getProductById } from "../../services/firestoreDataService";
import { useAuth } from "../../services/authService";
import Footer from "../Footer/Footer";
import { handleInterestSubmit } from "../../services/firestoreUploadService"

const ProductsDetails = (props) => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [mainImage, setMainImage] = useState();
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const {user} = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Inicia o carregamento
      let product = await getProductById(params.id);
      setProduct(product)
      console.log(product)
    }
    fetchProduct()
    setLoading(false)
  }, []);

  const sendInterestNotification = () => {
    if(!user){
      alert("Você precisa estar logado para demonstrar interesse.");
      navigate("/login")
      return;
    }
    if(user.displayName == product.username){
      alert("Você não pode demonstrar interesse no seu próprio produto xD.");
      return;
    }
    handleInterestSubmit(user.displayName, product.username, product.id, product.title)
  };

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento
  }
  
  return (
    <div className="Home">
      <Header />
      <main id="products-details-main">
        <section id="content-wrapper">
        {product ? ( // Verifica se o produto está definido
          <>
            <div id="image-container">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div id="info-container">
              <h1 id="info-product-title">{product.title}</h1>
              <div id="line"></div>
              <p>{product.description}</p>
              <p id="locador">Locador: {product.username}</p>
              <div id="line"></div>
              <button onClick={sendInterestNotification}>Estou interessado</button>
            </div>
          </>
        ) : (
          <div>Produto não encontrado.</div>)}
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default ProductsDetails;
