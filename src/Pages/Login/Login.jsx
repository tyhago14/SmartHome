import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/home3-final.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  const handleKeyDownPass = (event) => {
    if (event.key === "Enter") {
      /* logInWithEmailAndPassword(email, password); //login with enter button press */
      navigate("/signup");
    }
  };

  const handleKeyDownOther = (event) => {
    const passwordlogin = document.getElementById("passwordfield");
    if (event.key === "Enter") {
      passwordlogin.focus(); //select password field when pressing enter on e-mail field
    }
  };
  return (
    <>
      <div className="background">
        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>
        <div className="loginflex">
          <div className="left">
          <div className="login__container">
            <div className="titulo_grande"> Inicie Sessão </div>
            <div className="titulo_pequeno"> E-mail de utilizador </div>
            <input
              id="email"
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDownOther}
            />

            <div className="titulo_pequeno"> Palavra-Passe </div>
            <input
              id="passwordfield"
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDownPass}
            />

            <div className="linkRight">
              <Link to="/reset">Esqueceu-se da palavra-passe?</Link>
            </div>
            <button className="login__btn" onClick={handleClick}>
                Iniciar sessão
            </button>
            <div>
              Não tem conta? <Link to="/signup">Crie uma agora.</Link>
            </div>
          </div>
          </div>
          <div className="right">
            <div className="imageContainer">
              <img src={logo} alt="Logo" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
