import Sidebar from "../../Components/Comp_Sidebar/Comp_Sidebar";
import Navbar from "../../Components/Comp_Navbar/Comp_Navbar";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { FcGlobe } from "react-icons/fc";
import "./Conta.css";
import { AppContext } from "../../GlobalState";

const Conta = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cidade, setCidade] = useState("");
    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [password, setPassword] = useState(""); //Nova
    const [password2, setPassword2] = useState(""); //Rep Nova
    const [password3, setPassword3] = useState(""); //Velha
    const { state, actions } = useContext(AppContext);
    const { DadosUtilizador, AvatarUtilizador } = state;
    const { AtualizarAvatarUtilizador, setDadosUtilizador } = actions;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file.size > 1024 * 1024) {
            toast.error("A imagem tem de ser menor que 1MB", {
                theme: "colored",
            });
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            AtualizarAvatarUtilizador(reader.result);
        };
        reader.readAsDataURL(file);
        toast.success("Imagem atualizada com sucesso!", {
            theme: "colored",
        });
    };

    const handleClickCoord = () => {
        if (isEditable) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        }
    };

    useEffect(() => {
        setEmail(DadosUtilizador.email);
        setName(DadosUtilizador.nome);
        setCidade(DadosUtilizador.cidade);
        setLat(DadosUtilizador.lat);
        setLong(DadosUtilizador.long);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePasss = () => {
        const element1 = document.getElementById("password");
        const element2 = document.getElementById("password2");
        const element3 = document.getElementById("password3");
        element1.classList.remove("erro");
        element2.classList.remove("erro");
        element3.classList.remove("erro");
        setTimeout(() => {
            if (!password || !password2 || !password3) {
                element1.classList.add("erro");
                element2.classList.add("erro");
                element3.classList.add("erro");
                toast.error("Preencha todos os campos", {
                    theme: "colored",
                });
            } else {
                element1.classList.remove("erro");
                element2.classList.remove("erro");
                element3.classList.remove("erro");
                if (password !== password2) {
                    element2.classList.add("erro");
                    element1.classList.add("erro");
                    toast.error("As Palavras-Passes tem de ser iguais!", {
                        theme: "colored",
                    });
                } else {
                    setDadosUtilizador({
                        ...DadosUtilizador,
                        pass: password3,
                    });
                    toast.success("Palavra-passe atualizada com sucesso!", {
                        theme: "colored",
                    });
                }
            }
        }, 10);
    };

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

            setDadosUtilizador({
                ...DadosUtilizador,
                email: email,
                nome: name,
                cidade: cidade,
                lat: Lat,
                long: Long,
            });

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
                                <div className="container">
                                    <div className="avatar-upload">
                                        <div className="avatar-edit">
                                            <input
                                                type="file"
                                                id="imageUpload"
                                                accept=".png, .jpg, .jpeg"
                                                onChange={handleImageChange}
                                            />
                                            <label htmlFor="imageUpload"></label>
                                        </div>
                                        <div className="avatar-preview">
                                            <div
                                                id="imagePreview"
                                                style={{
                                                    backgroundImage: `url(${AvatarUtilizador})`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

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
                                        {isEditable ? (
                                            <input
                                                type="text"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
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
                                            <span> {email}</span>
                                        )}
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
                                            Nova Palavra-Passe
                                        </div>
                                        <div className="conta-subTitulo2">
                                            Repita a Palavra-Passe
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
                                            id="password2"
                                            type="password"
                                            className="login__textBox50"
                                            style={{ width: "50%" }}
                                            onChange={(e) =>
                                                setPassword2(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div
                                        className="coord"
                                        style={{ margin: "2rem 0rem 0rem" }}
                                    >
                                        <div className="conta-subTitulo2">
                                            Palavra-Passe antiga
                                        </div>
                                    </div>
                                    <div className="coord">
                                        <input
                                            id="password3"
                                            type="password"
                                            className="login__textBox50"
                                            style={{ width: "50%" }}
                                            onChange={(e) =>
                                                setPassword3(e.target.value)
                                            }
                                        />
                                        <button
                                            className="pass__btn"
                                            onClick={handlePasss}
                                        >
                                            Alterar Palavra-Passe
                                        </button>
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
                                        {isEditable ? (
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
                                        ) : (
                                            <div className="login__textBox50">
                                                <span>{Lat}</span>
                                            </div>
                                        )}

                                        {isEditable ? (
                                            <input
                                                id="long"
                                                type="number"
                                                className="login__textBox50"
                                                placeholder="Latitude"
                                                value={Long}
                                                onChange={(e) =>
                                                    setLong(e.target.value)
                                                }
                                            />
                                        ) : (
                                            <div className="login__textBox50">
                                                <span>{Long}</span>
                                            </div>
                                        )}

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
                            {isEditable ? (
                                <button
                                    className="login__btn2"
                                    onClick={handleButtonClick}
                                >
                                    Submeter
                                </button>
                            ) : (
                                <button
                                    className="login__btn"
                                    onClick={handleButtonClick}
                                >
                                    Editar campos
                                </button>
                            )}
                        </div>
                    </div>
                </Navbar>
            </Sidebar>
        </>
    );
};

export default Conta;
