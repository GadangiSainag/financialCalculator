import "./App.css";
import NavBar from "./Components/NavBar";
import CalculatorPage from "./Pages/CalculatorPage";
import LandingPage from "./Pages/LandingPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter >
    <Routes>
    <Route path="/calculator" element={ <CalculatorPage />} />
    <Route path="/home" element={<LandingPage />}/>
    </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
