import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";

import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import About from "./pages/About";

import Header from "./components/Header";

const PageRouter = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  };


  return (
    <Router>
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop cart={cart} addFn={addToCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
};

export default PageRouter;
