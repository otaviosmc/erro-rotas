import React from "react";

import "./style.css";

export default function Contato() {
  return (
    <section className="contato">
      <div className="container box-contato">
        <div>
          <img src="/assets/logo.png" />
        </div>
        <div>
          <h3>Endereço</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h3>Horários</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 20:00</p>
        </div>
      </div>
    </section>
  );
}
