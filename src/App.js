import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import HeroBanner from "./components/heroBanner";
import { CartProvider } from "./context/CartContext";
import FilterByCategory from "./components/Filters/FilterByCategory";
import products from './data/products';
import logoImage from './assets/images/logos/vurger-logo.png';
import ItemDetailContainer from "./pages/ItemDetailContainer";

const navLinks = [
  { name: "All Products", path: "/" },
  { name: "Burgers", path: "/category/burger" },
  { name: "Salads", path: "/category/salad" },
  { name: "Sandwiches", path: "/category/sandwiches" },
];

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar logoImg={logoImage} products={products} />
      <HeroBanner />
        <Routes>
          <Route path="/" element={<ItemListContainer products={products} greeting="Welcome!"/>} />
          <Route path="/category/:category" element={<ItemListContainer products={products} />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
    </Router>
  </CartProvider>
  );
}

export default App;

