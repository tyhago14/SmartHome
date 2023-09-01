import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Dispositivos from "./Pages/Dispositivos/Dispositivos";
import Conta from "./Pages/Conta/Conta";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dispositivos" element={<Dispositivos />} />
          <Route exact path="/conta" element={<Conta />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
