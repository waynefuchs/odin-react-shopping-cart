import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";

import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
