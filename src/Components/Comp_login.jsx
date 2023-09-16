import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";
import { toast } from "react-toastify";

const Comp_login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");

    const [estado, setEstado] = useState(0);
    const navigate = useNavigate();
    let renderComponent = null;

    const handleClickLogin = () => {
        const element1 = document.getElementById("emailLogin");
        const element2 = document.getElementById("passwordfieldLogin");
        element1.classList.remove("erro");
        element2.classList.remove("erro");
        setTimeout(() => {
            if (!email || !password) {
                console.log("Sem dados completos");
                element1.classList.add("erro");
                element2.classList.add("erro");
                toast.error("Email ou Palavra-Passe incorretos!", {
                    theme: "colored",
                });
            } else {
                console.log("Com dados completos");
                navigate("/dashboard");
            }
        }, 10);

        //navigate("/dashboard");
    };

    const handleClickRegister = () => {
        const element1 = document.getElementById("email");
        const element2 = document.getElementById("passwordfield");
        const element3 = document.getElementById("passwordfield2");
        element1.classList.remove("erro");
        element2.classList.remove("erro");
        element3.classList.remove("erro");
        setTimeout(() => {
            if (!email || !password || !password2) {
                console.log("Sem dados completos");
                element1.classList.add("erro");
                element2.classList.add("erro");
                element3.classList.add("erro");
                toast.error("Preencha todos os campos!", {
                    theme: "colored",
                });
            } else {
                element1.classList.remove("erro");
                element2.classList.remove("erro");
                element3.classList.remove("erro");
                console.log("Com dados completos");
                if (password !== password2) {
                    console.log("Pass diferente");
                    element3.classList.add("erro");
                    toast.error("As Palavras-Passes tem de ser iguais!", {
                        theme: "colored",
                    });
                } else {
                    console.log("Pass igual");
                    setEstado(2);
                }
            }
        }, 10);
    };

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

    const handleClickRegister2 = () => {
        const element1 = document.getElementById("nome");
        const element2 = document.getElementById("cidade");
        const element3 = document.getElementById("lat");
        const element4 = document.getElementById("long");
        element1.classList.remove("erro");
        element2.classList.remove("erro");
        element3.classList.remove("erro");
        element4.classList.remove("erro");
        setTimeout(() => {
            if (!nome || !cidade || !Lat || !Long) {
                console.log("Sem dados completos");
                element1.classList.add("erro");
                element2.classList.add("erro");
                element3.classList.add("erro");
                element4.classList.add("erro");
                toast.error("Preencha todos os campos!", {
                    theme: "colored",
                });
            } else {
                console.log("Com dados completos");
                navigate("/dashboard");
            }
        }, 10);
    };

    if (estado === 0) {
        // LOGIN //
        renderComponent = (
            <div className="login__container">
                <div className="titulo_grande"> Inicie Sessão </div>
                <div className="titulo_pequeno"> E-mail de utilizador </div>
                <input
                    id="emailLogin"
                    type="text"
                    className="login__textBox0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="titulo_pequeno"> Palavra-Passe </div>
                <input
                    id="passwordfieldLogin"
                    type="password"
                    className="login__textBox0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="linkRight">
                    <Link to="/reset">Esqueceu-se da palavra-passe?</Link>
                </div>
                <button className="login__btn" onClick={handleClickLogin}>
                    Iniciar sessão
                </button>
                <div>
                    Não tem conta?{" "}
                    <Link onClick={() => setEstado(1)}>Crie uma agora.</Link>
                </div>
            </div>
        );
    }

    if (estado === 1) {
        // REGISTO 1//
        renderComponent = (
            <div className="login__container">
                <div className="titulo_grande"> Novo Registo </div>
                <div className="titulo_pequeno"> E-mail de utilizador </div>
                <input
                    id="email"
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="titulo_pequeno"> Palavra-Passe </div>
                <input
                    id="passwordfield"
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="titulo_pequeno"> Repita a Palavra-Passe </div>
                <input
                    id="passwordfield2"
                    type="password"
                    className="login__textBox"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />

                <div className="linkRight">
                    Já tem conta?
                    <Link onClick={() => setEstado(0)}> Inicie sessão</Link>
                </div>
                <button className="login__btn" onClick={handleClickRegister}>
                    Seguinte
                </button>
            </div>
        );
    }

    if (estado === 2) {
        // REGISTO 2//
        renderComponent = (
            <div className="login__container">
                <div className="titulo_grande"> Finalização do Registo </div>
                <div className="titulo_pequeno"> Nome do utilizador </div>
                <input
                    id="nome"
                    type="text"
                    className="login__textBox"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <div className="titulo_pequeno"> Cidade de residência </div>
                <input
                    id="cidade"
                    type="text"
                    className="login__textBox"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
                <div className="titulo_pequeno"> Coordenadas geográficas</div>
                <div className="coord">
                    <input
                        id="lat"
                        type="number"
                        className="login__textBox50"
                        placeholder="Latitude"
                        value={Lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                    <input
                        id="long"
                        type="number"
                        className="login__textBox50"
                        placeholder="Longitude"
                        value={Long}
                        onChange={(e) => setLong(e.target.value)}
                    />
                    <FcGlobe
                        size={50}
                        onClick={handleClickCoord}
                        className="globe"
                    />
                </div>

                <div className="linkRight">
                    Já tem conta?
                    <Link onClick={() => setEstado(0)}> Inicie sessão</Link>
                </div>
                <button className="login__btn" onClick={handleClickRegister2}>
                    Registar
                </button>
            </div>
        );
    }

    return <>{renderComponent}</>;
};

export default Comp_login;
