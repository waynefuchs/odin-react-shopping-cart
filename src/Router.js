import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Button.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

const App = () => 
  <Router>
    <Header />


    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>


  </Router>;

export default App;
