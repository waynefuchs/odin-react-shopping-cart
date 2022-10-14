import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div id="home">Test</div>} />

    </Routes>
  </BrowserRouter>;

export default App;
