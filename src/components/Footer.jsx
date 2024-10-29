import React from "react";
import LogoFooter from "../assets/logowhiteDesktob.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo de l'entreprise */}
      <img
        className="footer__img"
        src={LogoFooter}
        alt="Logo de l'entreprise Kasa"
      />
      {/* Informations de copyright */}
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
