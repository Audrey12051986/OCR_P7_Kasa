import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"; // Chemin correct vers HomePage
import AboutPage from "../pages/AboutPage"; // Chemin correct vers AboutPage
import ErrorPage from "../pages/ErrorPage";
import PropertyPage from "../pages/PropertyPage";
import Header from "./Header"; // Chemin correct vers Header
import Footer from "./Footer";
import "../styles/index.scss";

/* <Route path="location/:id" element={<Location />} />*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/property" element={<PropertyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
