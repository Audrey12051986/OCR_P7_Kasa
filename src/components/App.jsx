/*import React from "react";
import Banner from "./Banner";
import "./styles/main.scss";

const App = () => {
  return <Banner />;
};

export default App;*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Header/" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
