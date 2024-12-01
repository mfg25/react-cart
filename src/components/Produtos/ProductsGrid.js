import React, { useEffect, useState } from "react";
import { getUserProductsByCategory } from "../../services/firestoreDataService";
import { Link } from "react-router-dom";

const ProductsGrid = (props) => {
  const [productArray, setProductArray] = useState([]); // Estado inicial vazio
  const [loading, setLoading] = useState(true); // Para controlar o estado de carregamento

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Inicia o carregamento
      let products = [];
      if (props.type === "instrumento") {
        products = await getUserProductsByCategory("instrumento");
      }
      if (props.type === "equipamento") {
        products = await getUserProductsByCategory("equipamento");
      }
      setProductArray(products); // Atualiza o estado com os produtos obtidos
      setLoading(false); // Finaliza o carregamento
    };

    fetchProducts(); // Executa a função de busca
  }, [props.type]); // Atualiza sempre que o tipo de produto mudar

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento
  }

  if (productArray.length === 0) {
    return <div>Nenhum produto encontrado.</div>; // Exibe uma mensagem se não houver produtos
  }

  return (
    <div className="products-grid">
      {productArray.map((product) => (
        <Link to={`/produtos/${product.category}/${product.id}`}>
        <div className="product-container" key={product.id}>
            <img alt={product.title} src={product.imageUrl} />
            <div className="caption">{console.log(product.id)}{product.title}</div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
