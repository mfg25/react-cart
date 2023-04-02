import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProductsDetails from "./components/Produtos/ProductsDetails";
import Produtos from "./components/Produtos/Produtos";
import Home from "./Home";
import Contato from "./components/Contato/Contato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/INFORMAÇÕES" element={<Contato />} />
        <Route
          path="/produtos/decorativos"
          element={<Produtos type="decorativos" />}
        />
        <Route
          path="/produtos/decorativos"
          element={<Produtos type="decorativos" />}
        />
        <Route
          path="/produtos/residencial"
          element={<Produtos type="residencial" />}
        />
        <Route
          path="/produtos/industrial"
          element={<Produtos type="industrial" />}
        />
        <Route
          path="/produtos/decorativos/:id"
          element={<ProductsDetails type="decorativos" />}
        />
        <Route
          path="/produtos/residencial/:id"
          element={<ProductsDetails type="residencial" />}
        />
        <Route
          path="/produtos/industrial/:id"
          element={<ProductsDetails type="industrial" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
