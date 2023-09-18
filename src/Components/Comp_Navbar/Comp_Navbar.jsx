import "./Comp_Navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../GlobalState";

// eslint-disable-next-line react/prop-types
const Comp_Navbar = ({ Page, children }) => {
    const pageName = Page;
    const navigate = useNavigate();
    const { state } = useContext(AppContext);
    const { DadosUtilizador, AvatarUtilizador } = state;

    const goConta = () => {
        navigate("/conta");
    };

    return (
        <>
            <div className="navbar-left titulo">{pageName}</div>
            <div className="navbar-right">
                <div className="name-icon" onClick={goConta}>
                    <div className="navbar-UserName">
                        {DadosUtilizador.nome}
                    </div>
                    <div className="container">
                        <div className="avatar-upload2">
                            <div className="avatar-preview">
                                <div
                                    style={{
                                        backgroundImage: `url(${AvatarUtilizador})`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="home-section">
                <main>{children}</main>
            </section>
        </>
    );
};

export default Comp_Navbar;
