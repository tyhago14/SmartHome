import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Dispositivos from "./Pages/Dispositivos/Dispositivos";
import Conta from "./Pages/Conta/Conta";
//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalState } from "./GlobalState";

function App() {
    return (
        <>
            <GlobalState>
                {/*  <ToastContainer /> */}
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route
                            exact
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            exact
                            path="/dispositivos"
                            element={<Dispositivos />}
                        />
                        <Route exact path="/conta" element={<Conta />} />
                    </Routes>
                </Router>
            </GlobalState>
        </>
    );
}

export default App;
