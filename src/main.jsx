import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Dispositivos from "./Pages/Dispositivos/Dispositivos.jsx";
import Conta from "./Pages/Conta/Conta.jsx";

const router = createBrowserRouter([
    {
        path: "/smarthome/",
        element: <App />,
        children: [
            {
                path: "/smarthome/",
                element: <Login />,
            },
            {
                path: "/smarthome/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/smarthome/dispositivos",
                element: <Dispositivos />,
            },
            {
                path: "/smarthome/conta",
                element: <Conta />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
