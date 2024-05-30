import "./App.css";
import NavBar from "./Components/NavBar";
import CalculatorPage from "./Pages/CalculatorPage";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/calculator/:calculatorId" element={<CalculatorPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
