import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import "./Dashboard.css";
import { Charts1, Tempo } from "../../Components/Comp_Charts/Comp_Charts";
const Dashboard = () => {
    return (
        <>
            <Sidebar Page="Dashboard">
                <Navbar Page="Dashboard">
                    <section className="basic-grid">
                        <div className="gridBox card-wide">
                            <div className="gridBox-text">
                                {" "}
                                Bem vindo EXEMPLO{" "}
                            </div>
                        </div>
                        <div className="gridBox2 card-wide4">
                            <Tempo />
                        </div>
                        <div className="gridBox card-wide">
                            <div className="gridBox-text">
                                {" "}
                                Temperatura Atual{" "}
                            </div>
                            <Charts1 />
                        </div>
                        <div className="gridBox card-wide3">
                            <div className="gridBox-text">
                                {" "}
                                Histórico de temperatura{" "}
                            </div>
                            <Charts1 />
                        </div>
                        <div className="gridBox">
                            <div className="gridBox-text">
                                {" "}
                                Bateria do sensor{" "}
                            </div>
                            <Charts1 />
                        </div>
                        <div className="gridBox card-wide">
                            <div className="gridBox-text"> Humidade</div>
                            <Charts1 />
                        </div>
                        <div className="gridBox card-wide3">
                            <div className="gridBox-text">
                                {" "}
                                Histórico de humidade{" "}
                            </div>
                            <Charts1 />
                        </div>
                        <div className="gridBox">
                            <div className="gridBox-text">
                                {" "}
                                Bateria do sensor{" "}
                            </div>
                            <Charts1 />
                        </div>
                    </section>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Dashboard;
