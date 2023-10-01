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
    const renderComponent0 = (
        <section className="basic-grid">
            <div className="gridBox">
                <div className="gridBox-text">Todos dispositivos</div>
            </div>
        </section>
    );
    const renderComponent1 = (
        <section className="basic-grid">
            <div className="gridBox">
                <div className="gridBox-text">Todos</div>
            </div>
        </section>
    );
    const renderComponent2 = (
        <section className="basic-grid">
            <div className="gridBox">
                <div className="gridBox-text">Todo2s</div>
            </div>
        </section>
    );
    const renderComponent3 = (
        <section className="basic-grid">
            <div className="gridBox">
                <div className="gridBox-text">Todos3</div>
            </div>
        </section>
    );

    return (
        <>
            <Sidebar Page="Dispositivos">
                <Navbar Page="Dispositivos">
                    <div className="row">
                        <div className="col">
                            <div className="tabs">
                                <div className="tab">
                                    <input
                                        type="checkbox"
                                        id={0}
                                        className="custom-input"
                                        defaultChecked={0 === 0}
                                    />
                                    <label className="tab-label" htmlFor={0}>
                                        <div className="text-icon">
                                            <img src={divisoesImg[0]} alt="" />
                                            {divisoes[0]}
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        {renderComponent0}
                                    </div>
                                </div>
                                <div className="tab">
                                    <input
                                        type="checkbox"
                                        id={1}
                                        className="custom-input"
                                        defaultChecked={1 === 0}
                                    />
                                    <label className="tab-label" htmlFor={1}>
                                        <div className="text-icon">
                                            <img src={divisoesImg[1]} alt="" />
                                            {divisoes[1]}
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        {renderComponent1}
                                    </div>
                                </div>
                                <div className="tab">
                                    <input
                                        type="checkbox"
                                        id={2}
                                        className="custom-input"
                                        defaultChecked={2 === 0}
                                    />
                                    <label className="tab-label" htmlFor={2}>
                                        <div className="text-icon">
                                            <img src={divisoesImg[2]} alt="" />
                                            {divisoes[2]}
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        {renderComponent2}
                                    </div>
                                </div>
                                <div className="tab">
                                    <input
                                        type="checkbox"
                                        id={3}
                                        className="custom-input"
                                        defaultChecked={3 === 0}
                                    />
                                    <label className="tab-label" htmlFor={3}>
                                        <div className="text-icon">
                                            <img src={divisoesImg[3]} alt="" />
                                            {divisoes[3]}
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        {renderComponent3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Dispositivos;
