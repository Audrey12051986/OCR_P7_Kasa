import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Chemin correct vers HomePage
import AboutPage from "../pages/AboutPage"; // Chemin correct vers AboutPage
import Header from "./Header"; // Chemin correct vers Header

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Page d'accueil */}
        <Route path="/about" element={<AboutPage />} /> {/* Page "À propos" */}
      </Routes>
    </Router>
  );
}

export default App;

/*{ Ajouter le Header ici si tu veux qu'il apparaisse sur toutes les pages }*/
