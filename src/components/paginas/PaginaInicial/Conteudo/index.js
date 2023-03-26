import React from "react";
import Sabores from "./Sabores";
import Eventos from "./Eventos";
import Sobre from "./Sobre";

export default function Conteudo() {
  return (
    <section>
      <Sabores />
      <Eventos />
      <Sobre />
    </section>
  );
}
