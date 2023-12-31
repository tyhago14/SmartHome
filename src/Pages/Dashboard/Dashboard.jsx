import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import "./Dashboard.css";
import {
    Chart2,
    Chart3,
    Tempo,
} from "../../Components/Comp_Charts/Comp_Charts";
import fall from "../../assets/fall.png";
import hot from "../../assets/hot.png";
import water from "../../assets/water-splash.png";
//import bat from "../../assets/battery.png";
import { useState, useEffect, useContext } from "react";
import Quarto from "../../assets/quarto.png";
import Cozinha from "../../assets/kitchen.png";
import Sala from "../../assets/sala.png";
import Banho from "../../assets/banho.png";
import { AppContext } from "../../GlobalState";

const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { DadosUtilizador } = state;
    console.log(DadosUtilizador);
    const [width, setWidth] = useState(window.innerWidth);
    //console.log(width);

    useEffect(() => {
        navButton();
        setWidth(window.innerWidth);
    }, []);

    function navButton() {
        const firstButton = document.querySelector(".nav-item:first-child");
        firstButton.classList.add("is-active");
        const indicator = document.querySelector(".nav-indicator");
        const items = document.querySelectorAll(".nav-item");

        function handleIndicator(el) {
            items.forEach((item) => {
                item.classList.remove("is-active");
                item.removeAttribute("style");
            });
            console.log(el, el.offsetWidth);
            indicator.style.width = `${el.offsetWidth}px`;
            indicator.style.left = `${el.offsetLeft}px`;
            indicator.style.backgroundColor = el.getAttribute("active-color");
            if (
                el.id === "banho" ||
                el.id === "sala" ||
                el.id === "cozinha" ||
                el.id === "quarto"
            ) {
                const element = document.getElementById(el.id + "B");
                element.classList.add("is-active");
                element.style.color = element.getAttribute("active-color");
                indicator.style.width = `${element.offsetWidth}px`;
                indicator.style.left = `${element.offsetLeft}px`;
                indicator.style.backgroundColor =
                    element.getAttribute("active-color");
            }
            el.classList.add("is-active");
            el.style.color = el.getAttribute("active-color");
        }

        items.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                handleIndicator(e.target);
                setEstado(index);
            });
            item.classList.contains("is-active") && handleIndicator(item);
        });
    }

    var monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    var date = new Date().getDate(); //To get the Current Date
    var month = monthNames[new Date().getMonth()]; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var mint = new Date().getMinutes(); //To get the Current Minutes
    const pad = mint < 10 ? "0" : "";
    var min = pad + mint;
    const userName = "Tiago";
    console.log(date, month, year, hours, min);
    let renderComponent = null;
    const [estado, setEstado] = useState(0);

    if (estado === 0) {
        //Sala
        renderComponent = (
            <section className="basic-grid">
                <div className="gridBox">
                    <div className="gridBox-text">Temperatura</div>
                    <div className="iconValor">
                        <div className="iconValorLeft">
                            <img src={hot} alt="" />
                        </div>
                        <div className="iconValorRight">25ºC</div>
                    </div>
                </div>
                <div className="gridBox card-tall card-wide3">
                    <div className="gridBox-text">Temperatura & Humidade</div>
                    <Chart2 value={width} />
                </div>
                <div className="gridBox card-tall card-wide2">
                    <div className="gridBox-text">Bateria (%)</div>
                    <Chart3 />
                </div>
                <div className="gridBox">
                    <div className="gridBox-text">Humidade</div>
                    <div className="iconValor">
                        <div className="iconValorLeft">
                            <img src={water} alt="" />
                        </div>
                        <div className="iconValorRight">87%</div>
                    </div>
                </div>
            </section>
        );
    }

    if (estado === 1) {
        //Cozinha
        renderComponent = (
            <section className="basic-grid">
                <div className="gridBox card-wide2">
                    <div className="gridBox-text">Temperatura</div>
                    <div className="iconValor">
                        <div className="iconValorLeft">
                            <img src={water} alt="" />
                        </div>
                        <div className="iconValorRight"></div>
                    </div>
                </div>
                <div className="gridBox card-wide2">
                    <div className="gridBox-text">Humidade</div>
                </div>
                <div className="gridBox card-wide2">
                    <div className="gridBox-text">Bateria</div>
                </div>
            </section>
        );
    }

    /*     if (estado === 2) {
        //Cozinha
        renderComponent = (

        );
    }

    if (estado === 3) {
        //Casa de banho
        renderComponent = (

        );
    } */

    return (
        <>
            <Sidebar Page="Dashboard">
                <Navbar Page="A minha Casa">
                    <section className="basic-grid">
                        <div
                            className="gridBoxHello card-wide3"
                            style={{ backgroundImage: `url(${fall})` }}
                        >
                            <div className="gridBox-hello">
                                Bem vindo, {userName}
                            </div>
                            <div className="gridBox-horas">
                                {hours}:{min}
                            </div>
                            <div className="gridBox-data">
                                {date}
                                {" de "}
                                {month}
                                {" de "}
                                {year}
                            </div>
                        </div>
                        <div className="gridBox2 card-wide2">
                            <Tempo />
                        </div>
                        <div className="gridBox">
                            <div className="gridBox-text">
                                Todos dispositivos
                            </div>
                        </div>
                    </section>
                    <div className="navbody">
                        <nav className="nav">
                            <button
                                type="button"
                                className="nav-item"
                                // eslint-disable-next-line react/no-unknown-property
                                active-color="#2b8750"
                                id="salaB"
                            >
                                <img src={Sala} alt="" id="sala" />
                                Sala de estar
                            </button>
                            <button
                                type="button"
                                className="nav-item"
                                // eslint-disable-next-line react/no-unknown-property
                                active-color="#dc76dd"
                                id="cozinhaB"
                            >
                                <img src={Cozinha} alt="" id="cozinha" />
                                Cozinha
                            </button>
                            <button
                                type="button"
                                className="nav-item"
                                // eslint-disable-next-line react/no-unknown-property
                                active-color="#219ebc"
                                id="banhoB"
                            >
                                <img src={Banho} alt="" id="banho" />
                                Casa de banho
                            </button>
                            <button
                                type="button"
                                className="nav-item"
                                // eslint-disable-next-line react/no-unknown-property
                                active-color="#f27777"
                                id="quartoB"
                            >
                                <img src={Quarto} alt="" id="quarto" />
                                Quarto
                            </button>
                            <span className="nav-indicator"></span>
                        </nav>
                    </div>

                    {renderComponent}
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Dashboard;
