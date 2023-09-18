import { createContext, useState } from "react";
import avatar from "./assets/avatar.png";

// Create the initial context
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalState = ({ children }) => {
    const [AvatarUtilizador, setAvatarUtilizador] = useState(avatar);
    /*     const [DadosUtilizador, setDadosUtilizador] = useState([
        "tpmarques03@gmail.com",
        "123",
        "Tiago",
        "Santo Tirso",
        "40.2",
        "-8.3",
    ]); */
    const [DadosUtilizador, setDadosUtilizador] = useState({
        email: "tpmarques03@gmail.com",
        pass: "123",
        nome: "Tiago",
        cidade: "Santo Tirso",
        lat: "40.2",
        long: "-8.3",
    });

    const AtualizarDadosUtilizador = (NovosDados) => {
        setDadosUtilizador(NovosDados);
    };
    const AtualizarAvatarUtilizador = (NovoAvatar) => {
        setAvatarUtilizador(NovoAvatar);
    };

    const state = { DadosUtilizador, AvatarUtilizador };
    const actions = {
        AtualizarDadosUtilizador,
        AtualizarAvatarUtilizador,
        setDadosUtilizador,
    };

    return (
        <AppContext.Provider value={{ state, actions }}>
            {children}
        </AppContext.Provider>
    );
};
