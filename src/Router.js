import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";

const App = () => 
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />

    </Routes>
  </Router>;

export default App;
