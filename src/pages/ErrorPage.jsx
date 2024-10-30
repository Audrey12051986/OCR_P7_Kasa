import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups! La page que vous demandez n&apos;existe pas.
      </h2>
      {/* Lien vers la page d'accueil */}
      <Link className="error__link" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
}

export default Error;
