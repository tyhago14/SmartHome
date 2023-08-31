import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route/> 
        </Routes>
      </Router>
    </>
  )
}

export default App

