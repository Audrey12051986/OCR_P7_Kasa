import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"; // Chemin correct vers HomePage
import AboutPage from "../pages/AboutPage"; // Chemin correct vers AboutPage
import Header from "./Header"; // Chemin correct vers Header

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Page d'accueil */}
        <Route path="/about" element={<AboutPage />} /> {/* Page "À propos" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*{ Ajouter le Header ici si tu veux qu'il apparaisse sur toutes les pages }*/
