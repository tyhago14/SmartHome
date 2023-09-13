import { useNavigate } from "react-router-dom";
import logo from "../../assets/home3-final-Icon.png";
//import { useEffect, useState } from "react";
import "./Comp_Sidebar.css";
import {
    MdLogout,
    /*     MdOutlineAreaChart,
    MdManageAccounts,
    MdOutlineEditCalendar, */
} from "react-icons/md";
import { FcAreaChart, FcElectronics, FcServices } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const Comp_Sidebar = ({ Page, children }) => {
    const hoverIcon = Page;
    const navigate = useNavigate();
    const goLogout = () => {
        navigate("/");
    };
    const goDash = () => {
        navigate("/dashboard");
    };
    const goDisp = () => {
        navigate("/dispositivos");
    };
    const goConta = () => {
        navigate("/conta");
    };
    return (
        <>
            <nav className="sidebar2">
                <ul className="sidebar2-nav">
                    <li className="sidebar2-logo">
                        <a href="#top" id="SB2" onClick={goDash}>
                            <img
                                src={logo}
                                alt="Logo"
                                className="icon"
                                height="50"
                            />
                        </a>
                    </li>

                    <li
                        className={`sidebar2-item ${
                            hoverIcon === "Dashboard"
                                ? "sidebar2-linkAtualPage"
                                : ""
                        }`}
                    >
                        <a
                            href="#top"
                            className="sidebar2-link"
                            onClick={goDash}
                        >
                            <FcAreaChart size={40} />
                            <span className="link-text">Dasboard</span>
                        </a>
                    </li>

                    <li
                        className={`sidebar2-item ${
                            hoverIcon === "Dispositivos"
                                ? "sidebar2-linkAtualPage"
                                : ""
                        }`}
                    >
                        <a
                            href="#top"
                            className="sidebar2-link"
                            onClick={goDisp}
                        >
                            <FcElectronics size={40} />
                            <span className="link-text">Dispositivos</span>
                        </a>
                    </li>

                    <li
                        className={`sidebar2-item ${
                            hoverIcon === "Conta"
                                ? "sidebar2-linkAtualPage"
                                : ""
                        }`}
                    >
                        <a
                            href="#top"
                            className="sidebar2-link"
                            onClick={goConta}
                        >
                            <FcServices size={40} />
                            <span className="link-text">Conta</span>
                        </a>
                    </li>

                    <li className="sidebar2-item">
                        <a
                            href="#top"
                            className="sidebar2-link"
                            onClick={goLogout}
                        >
                            <MdLogout size={40} />
                            <span className="link-text">SAIR</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="home-section2">
                <main>{children}</main>
            </section>
        </>
    );
};

export default Comp_Sidebar;
