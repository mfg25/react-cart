import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProductsDetails from "./components/Produtos/ProductsDetails";
import Produtos from "./components/Produtos/Produtos";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route
          path="/produtos/decorativos"
          element={<Produtos type="decorativos" />}
        />
        <Route
          path="/produtos/decorativos/:id"
          element={<ProductsDetails type="decorativos" />}
        />
        <Route path="/produtos/calças" element={<Produtos type="pants" />} />
        <Route path="/produtos/bonés" element={<Produtos type="caps" />} />
        <Route path="/produtos/shorts" element={<Produtos type="shorts" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
