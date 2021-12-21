import React from "react";
import { Routes, Route } from 'react-router-dom'
import "./fonts/fonts.scss"

import Header from "./components/common/Header";

import Category from "./pages/category";
import Product from "./pages/product";
import Cart from "./pages/cart";



export default function BasicExample() {
  return (
    <div>
      < Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

