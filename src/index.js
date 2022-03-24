import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { CategoriesProvider } from "./context/category-context"
import { ProductProvider } from "./context/productList-context"
import { SortFilterDataProvider } from "./context/filter-context"
import { CartProvider } from "./context/cart-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <SortFilterDataProvider>
          <ProductProvider>
            <CategoriesProvider>
              <App />
            </CategoriesProvider>
          </ProductProvider>
        </SortFilterDataProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
