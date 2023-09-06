import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import { useState, useEffect } from "react";
import logo from "../../assets/home3-final.png";
import "./Conta.css";

const Conta = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [NIF, setNIF] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        //AccountValues((userData) => {
        setName("Nome");
        setAddress("Lisboa");
        setPhone("9879879");
        setNIF("54654646");
        setEmail("exemplo@gmail.com");

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
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">Cargo</div>
                                    <div className="conta-info">
                                        <span>{name}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="conta-box-right">
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Estado da conta
                                    </div>
                                    <div className="conta-info">
                                        <span>{name}</span>
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        UserID
                                    </div>
                                    <div className="conta-info">
                                        <span>{name}</span>
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Morada
                                    </div>
                                    <div className="conta-info">
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
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
                                            <span>{address}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">
                                        Contacto
                                    </div>
                                    <div className="conta-info">
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
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
                                            <span>{phone}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="conta-nameInput">
                                    <div className="conta-subTitulo">NIF</div>
                                    <div className="conta-info">
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={NIF}
                                                onChange={(e) =>
                                                    setNIF(e.target.value)
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
                                            <span>{NIF}</span>
                                        )}
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
