import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaSabores from "../paginas/PaginaSabores";
import PaginaInicial from "../paginas/PaginaInicial";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaInicial />} />
        <Route path="/sabores" element={<PaginaSabores />} />
      </Routes>
    </BrowserRouter>
  );
}
