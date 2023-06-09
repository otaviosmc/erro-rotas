import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="container menu">
        <img src="assets/logo.png" />
        <div>
          <Link to="/">Home</Link>
          <Link to="/sabores">Sabores</Link>
        </div>
      </div>
    </header>
  );
}
