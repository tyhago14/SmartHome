import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";

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
        navigate("/dashboard");
    };

    const handleClickRegister = () => {
        console.log("aahah");
        setEstado(2);
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
        navigate("/dashboard");
    };

    if (estado === 0) {
        // LOGIN //
        renderComponent = (
            <div className="login__container">
                <div className="titulo_grande"> Inicie Sessão </div>
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
        // REGISTO //
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
                    id="passwordfield"
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
        // REGISTO //
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
                        id="log"
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
