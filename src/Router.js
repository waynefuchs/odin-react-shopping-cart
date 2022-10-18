import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Item from "./components/Item";

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/shop"
        element={
          <Item
            name="Silk Road Camel"
            image="image.jpeg"
            shortDescription="A camel"
            price="123.45"
          />
        }
      />
    </Routes>
  </Router>
);

export default App;
