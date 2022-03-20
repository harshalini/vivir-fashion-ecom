import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { CategoriesProvider } from "./context/category-context"
import { ProductProvider } from "./context/productList-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
      <CategoriesProvider>
      <App />
      </CategoriesProvider>
      </ProductProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
