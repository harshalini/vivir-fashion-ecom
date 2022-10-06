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
import { WishlistProvider } from "./context/wishlist-context"
import { AuthenticationProvider } from "./context/auth-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <CartProvider>
          <WishlistProvider>
            <SortFilterDataProvider>
              <ProductProvider>
                <CategoriesProvider>
                  <App />
                </CategoriesProvider>
              </ProductProvider>
            </SortFilterDataProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
