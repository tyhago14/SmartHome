import React from "react";
import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import "./Dispositivos.css";
import Sala from "../../assets/sala.png";
import Cozinha from "../../assets/kitchen.png";
import Banho from "../../assets/banho.png";
import Quarto from "../../assets/quarto.png";

var divisoes = ["Sala de estar", "Cozinha", "Casa de Banho", "Quarto"];
var divisoesImg = [Sala, Cozinha, Banho, Quarto];
const Dispositivos = () => {
    return (
        <>
            <Sidebar Page="Dispositivos">
                <Navbar Page="Dispositivos">
                    <div className="row">
                        <div className="col">
                            <div className="tabs">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <React.Fragment key={index}>
                                        <div className="tab">
                                            <input
                                                type="checkbox"
                                                id={index}
                                                className="custom-input"
                                                defaultChecked={index === 0}
                                            />
                                            <label
                                                className="tab-label"
                                                htmlFor={index}
                                            >
                                                <div className="text-icon">
                                                    <img
                                                        src={divisoesImg[index]}
                                                        alt=""
                                                    />
                                                    {divisoes[index]}
                                                </div>
                                            </label>
                                            <div className="tab-content">
                                                <section className="basic-grid">
                                                    <div className="gridBox">
                                                        <div className="gridBox-text">
                                                            Todos dispositivos
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Dispositivos;
