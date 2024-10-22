import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/src/pages/HomePage" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />{" "}
      {/* Route pour les pages non trouvées */}
    </Routes>
  );
};

export default AppRouter;
