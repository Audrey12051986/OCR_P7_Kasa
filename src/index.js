/*import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import App from "./components/App";
//import reportWebvitals frpm "./reportWevitales"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //document.getElementById("root")
);*/

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
