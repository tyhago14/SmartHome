import React from "react";
import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import "./Dispositivos.css";

const Dispositivos = () => {
    return (
        <>
            <Sidebar Page="Dispositivos">
                <Navbar Page="Dispositivos">
                    <div className="row">
                        <div className="col">
                            <div className="tabs">
                                {Array.from({ length: 5 }).map((_, index) => (
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
                                                    {"ahaagaghahaha"}
                                                </div>
                                            </label>
                                            <div className="tab-content">
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
                                                {"BBBBB"}
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
