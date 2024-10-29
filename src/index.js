import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import App from "./components/App.jsx";

//const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
