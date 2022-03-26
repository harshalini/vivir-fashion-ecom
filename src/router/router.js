import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home, ProductsPage, CartPage } from "../pages/all-pages"
import { WishlistPage } from "../pages/wishlist/wishlist";
export function AppRouter() {
    return (
    <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route path = "products" element = {<ProductsPage/>} />
        <Route path = "cart" element = {<CartPage />} />
        <Route path = "wishlist" element = {<WishlistPage />} />
      </Routes>
    )
}