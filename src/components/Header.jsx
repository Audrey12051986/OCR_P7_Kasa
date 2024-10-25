import React from "react";
import Logo from "../assets/logo.png";
/*import Navbar from "./Navbar";

import { Link } from "react-router-dom";*/

/**
 * Ce composant Header affiche le logo de l'entreprise et une barre de navigation en haut de la page.
 */
/*function Header() {
  return (
    <div className="header">
      {/* Lien vers la page d'accueil }
      <Link to="/">
        {/* Logo de l'entreprise }
        <img
          className="header__logo"
          src={Logo}
          alt="Logo de l'entreprise Kasa"
        />
      </Link>
      {/* Barre de navigation }
      <Navbar />
    </div>
  );
}*/

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
