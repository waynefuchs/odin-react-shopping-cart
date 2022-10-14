import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";

const App = () => 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />

    </Routes>
  </BrowserRouter>;

export default App;
