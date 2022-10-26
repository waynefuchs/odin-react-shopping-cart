import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";

import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import About from "./pages/About";

import Header from "./components/Header";
import ShoppingCart from "./pages/ShoppingCart";

const PageRouter = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (id) => {
    const lastIndex = cart.lastIndexOf(id);
    setCart(cart.filter((n, i) => i !== lastIndex));
  }

  return (
    <Router>
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop cart={cart} addFn={addToCart} rmFn={removeFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<ShoppingCart cart={cart} addFn={addToCart} rmFn={removeFromCart} />} />
      </Routes>

    </Router>
  );
};

export default PageRouter;
