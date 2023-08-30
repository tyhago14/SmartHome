import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route/> 
        </Routes>
      </Router>
    </>
  )
}

export default App

