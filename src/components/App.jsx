import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"; // Chemin correct vers HomePage
import AboutPage from "../pages/AboutPage"; // Chemin correct vers AboutPage
import Header from "./Header"; // Chemin correct vers Header
import Footer from "./Footer";

/* <Route path="location/:id" element={<Location />} />*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/*{ Ajouter le Header ici si tu veux qu'il apparaisse sur toutes les pages }*/
