import React from "react";
import { Routes, Route } from 'react-router-dom'
import "./fonts/fonts.scss"

import Header from "./components/common/Header";

import Products from "./pages/products";



export default function BasicExample() {
  return (
    <div>
      < Header />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

