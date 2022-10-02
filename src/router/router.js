import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home, ProductsPage, CartPage, Login, SignUp } from "../../src/pages"
import { WishlistPage } from "../pages/wishlist/wishlist";
import { Error } from "../components/error-comp/error";
import { RequiresAuth } from "../pages/account/requiresAuth";
import Mockman from "mockman-js"
export function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="products" element={<ProductsPage />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <CartPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <WishlistPage />
          </RequiresAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="Mockman" element={<Mockman />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}