import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //importa archivo css
import App from "./App"; //importa
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); //esto envia el componente al archivo html
