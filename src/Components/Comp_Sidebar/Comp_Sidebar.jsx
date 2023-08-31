import { useNavigate } from "react-router-dom";
import logo from "../../assets/home3-final.png";
//import { useEffect, useState } from "react";
import "./Comp_Sidebar.css";
import {
  MdLogout,
  MdOutlineAreaChart,
  MdManageAccounts,
  MdOutlineEditCalendar,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Comp_Sidebar = ({ children }) => {
  const hoverIcon = "Dashboard";
  const navigate = useNavigate();
  const goDash = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="sidebar2">
        <ul className="sidebar2-nav">
          <li className="sidebar2-logo">
            <a href="#top" id="SB2" onClick={goDash}>
              <img src={logo} alt="Logo" className="icon" height="50" />
            </a>
          </li>

          <li
            className={`sidebar2-item ${
              hoverIcon === "Dashboard" ? "sidebar2-linkAtualPage" : ""
            }`}
          >
            <a href="#top" className="sidebar2-link" onClick={goDash}>
              <MdOutlineAreaChart size={40} />
              <span className="link-text">Dasboards</span>
            </a>
          </li>

          <li
            className={`sidebar2-item ${
              hoverIcon === "Agenda" ? "sidebar2-linkAtualPage" : ""
            }`}
          >
            <a href="#top" className="sidebar2-link" onClick={goDash}>
              <MdOutlineEditCalendar size={40} />
              <span className="link-text">Dispositivos</span>
            </a>
          </li>

          <li
            className={`sidebar2-item ${
              hoverIcon === "Conta" ? "sidebar2-linkAtualPage" : ""
            }`}
          >
            <a href="#top" className="sidebar2-link" onClick={goDash}>
              <MdManageAccounts size={40} />
              <span className="link-text">Conta</span>
            </a>
          </li>

          <li className="sidebar2-item">
            <a href="#top" className="sidebar2-link" onClick={goDash}>
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
