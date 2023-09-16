import { createContext, useState } from "react";

// Create the initial context
export const AppContext = createContext();

// Create the provider component
export const GlobalState = ({ children }) => {
    const [DadosUtilizador, setDadosUtilizador] = useState([
        "tpmarques03@gmail.com",
        "123",
        "Tiago",
        "Santo Tirso",
        "40.2",
        "-8.3",
    ]);

    const AtualizarDadosUtilizador = (NovosDados) => {
        setDadosUtilizador(NovosDados);
    };

    const state = { DadosUtilizador };
    const actions = { AtualizarDadosUtilizador };

    return (
        <AppContext.Provider value={{ state, actions }}>
            {children}
        </AppContext.Provider>
    );
};
