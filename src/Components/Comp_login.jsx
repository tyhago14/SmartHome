import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Comp_login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [estado, setEstado] = useState(0);
  const navigate = useNavigate();
  let renderComponent = null;

  const handleClickLogin = () => {
    navigate("/dashboard");
  };

  const handleClickRegister = () => {
    navigate("/");
  };

  if (estado === 0) { // LOGIN //
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

  if (estado === 1) { // REGISTO //
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
          Registar
        </button>
      </div>
    );
  }

  return <>{renderComponent}</>;
};

export default Comp_login;
