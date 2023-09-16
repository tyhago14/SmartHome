import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import { useState, useEffect } from "react";
import logo from "../../assets/home3-final.png";
import { toast } from "react-toastify";
import { FcGlobe } from "react-icons/fc";
import "./Conta.css";

const Conta = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cidade, setCidade] = useState("");
    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleClickCoord = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            /* 
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
             */
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    };

    useEffect(() => {
        //AccountValues((userData) => {
        setName("Nome");
        setEmail("exemplo@gmail.com");
        setCidade("Santo Tirso");
        setLat("40.54");
        setLong("-8.456");
        //});
    }, []);

    const handleButtonClick = async () => {
        if (isEditable) {
            /*             const stateUpdate = await updateRegistry(
                name,
                address,
                phone,
                NIF
            );
            console.log(stateUpdate);
            if (stateUpdate === 1)
                //    NotificationManager.success("Dados atualizados com sucesso!");
                console.log(stateUpdate);
            else if (stateUpdate !== 1) console.log(stateUpdate);
            //    NotificationManager.error("Erro ao atualizar dados!"); */
            toast.success("Dados atualizados com sucesso!", {
                theme: "colored",
            });
        }
        setIsEditable(!isEditable);
    };
    return (
        <>
            <Sidebar Page="Conta">
                <Navbar Page="Conta">
                    <div className="conta-box">
                        <div className="conta-box-flex">
                            <div className="conta-box-left">
                                <img
                                    className="logoEmpresa"
                                    src={logo}
                                    alt="Empresa Logo"
                                />
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">Nome</div>
                                    <div className="conta-info">
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                style={{
                                                    border: "none",
                                                    fontSize: "1.1rem",
                                                    width: "100%",
                                                    color: "black",
                                                    overflowWrap: "break-word",
                                                    outline: "none",
                                                }}
                                            />
                                        ) : (
                                            <span> {name}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        E-mail
                                    </div>
                                    <div className="conta-info">
                                        <span>{email}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="conta-box-right">
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Alterar Palavra-Passe
                                    </div>
                                    <div className="coord">
                                        <div className="conta-subTitulo2">
                                            Palavra-Passe antiga
                                        </div>
                                        <div className="conta-subTitulo2">
                                            Nova Palavra-Passe
                                        </div>
                                    </div>
                                    <div className="coord">
                                        <input
                                            id="password"
                                            type="password"
                                            className="login__textBox50"
                                            style={{ width: "50%" }}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <input
                                            id="log"
                                            type="password"
                                            className="login__textBox50"
                                            style={{ width: "50%" }}
                                            onChange={(e) =>
                                                setPassword2(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Cidade
                                    </div>
                                    <div className="conta-info">
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={cidade}
                                                onChange={(e) =>
                                                    setCidade(e.target.value)
                                                }
                                                style={{
                                                    border: "none",
                                                    fontSize: "1.1rem",
                                                    width: "100%",
                                                    color: "black",
                                                    overflowWrap: "break-word",
                                                    outline: "none",
                                                }}
                                            />
                                        ) : (
                                            <span>{cidade}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Coordenadas geográficas
                                    </div>

                                    <div className="coord">
                                        <input
                                            id="lat"
                                            type="number"
                                            className="login__textBox50"
                                            placeholder="Latitude"
                                            value={Lat}
                                            onChange={(e) =>
                                                setLat(e.target.value)
                                            }
                                        />
                                        <input
                                            id="long"
                                            type="number"
                                            className="login__textBox50"
                                            placeholder="Longitude"
                                            value={Long}
                                            onChange={(e) =>
                                                setLong(e.target.value)
                                            }
                                        />
                                        <FcGlobe
                                            size={50}
                                            onClick={handleClickCoord}
                                            className="globe"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-center">
                            <button
                                className="login__btn"
                                onClick={handleButtonClick}
                            >
                                {isEditable ? "Submeter" : "Editar campos"}
                            </button>
                        </div>
                    </div>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Conta;
