import "./App.css";
import NavBar from "./Components/NavBar";
import CalculatorPage from "./Pages/CalculatorPage";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/:calculatorId" element={<CalculatorPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
