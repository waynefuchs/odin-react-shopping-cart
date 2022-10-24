import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";

import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";

import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  }

  return (
    <Router>
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop cart={cart} addFn={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
