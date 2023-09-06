import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <>
            <Sidebar Page="Dashboard">
                <Navbar Page="Dashboard">
                    <section className="basic-grid">
                        <div className="gridBox card-superwide card-tall">
                            <div className="gridBox-text"> Temperatura ºC </div>
                        </div>
                        <div className="gridBox card-superwide card-tall">
                            <div className="gridBox-text"> Humidade % </div>
                            <table className="motoresTable">
                                <tbody>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Posição</th>
                                        <th>Temperatura</th>
                                    </tr>
                                    <tr>
                                        <td>motorA1</td>
                                        <td>-1</td>
                                        <td>23 ºC</td>
                                    </tr>
                                    <tr>
                                        <td>motorA2</td>
                                        <td>-91</td>
                                        <td>23 ºC</td>
                                    </tr>
                                    <tr>
                                        <td>motorA3</td>
                                        <td>104</td>
                                        <td>23 ºC</td>
                                    </tr>
                                    <tr>
                                        <td>motorA4</td>
                                        <td>-1</td>
                                        <td>23 ºC</td>
                                    </tr>
                                    <tr>
                                        <td>motorA5</td>
                                        <td>48</td>
                                        <td>23 ºC</td>
                                    </tr>
                                    <tr>
                                        <td>motorA6</td>
                                        <td>0</td>
                                        <td>23 ºC</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="gridBox card-wide">
                            <div className="gridBox-text"> Interruptor </div>
                        </div>
                        <div className="gridBox card-wide">
                            <div className="gridBox-text"> Histórico </div>
                        </div>
                        <div className="gridBox card-wide">
                            <div className="gridBox-text"> Bateria </div>
                        </div>
                        <div className="gridBox card-supermegawide">
                            <div className="gridBox-text"> Meteorologia </div>
                        </div>
                    </section>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Dashboard;
