import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Item from "./components/Item";

import i from "./images";


const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/shop"
        element={
          <Item data={i[0]} />
        }
      />
    </Routes>
  </Router>
);

export default App;
