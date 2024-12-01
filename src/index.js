import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProductsDetails from "./components/Produtos/ProductsDetails";
import Produtos from "./components/Produtos/Produtos";
import Home from "./Home";
import Contato from "./components/Informacoes/Informacoes";
import Informacoes from "./components/Informacoes/Informacoes";
import { LoginPage, RegisterPage } from "./components/AuthPage/AuthPages";
import { AuthProvider } from "./services/authService";
import UserPage from "./components/UserPage/UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota principal */}
          <Route path="/" element={<Home />} />
          <Route path="/informacoes" element={<Informacoes />} />

          {/* Rota genérica para todos os tipos de produtos */}
          <Route path="/produtos" element={<Produtos />} />
          
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/userAccount/*" element={<UserPage />} />

          {/* Rota para cada tipo de produto usando parâmetros dinâmicos */}
          <Route path="/produtos/:type" element={<Produtos />} />

          {/* Detalhes do produto por tipo e id */}
          <Route path="/produtos/:type/:id" element={<ProductsDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
