import "./Login.css";
import logo from "../../assets/home3-final.png";
import Comp_login from "../../Components/Comp_login";

const Login = () => {

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
            <Comp_login/>
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
