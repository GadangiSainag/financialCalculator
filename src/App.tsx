import "./App.css";
import NavBar from "./Components/NavBar";
import CalculatorPage from "./Pages/CalculatorPage";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/calculator/:calculatorId" element={<CalculatorPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
