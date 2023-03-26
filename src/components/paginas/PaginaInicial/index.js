import React from "react";
import Banner from "./Banner";
import Conteudo from "./Conteudo";
import Contato from "../../Contato";

export default function PaginaInicial() {
  return (
    <main className="inicial">
      <Banner />
      <Conteudo />
      <Contato />
    </main>
  );
}
