import React, { createContext, useReducer } from "react";


/* const temas = {
    light: {
        id: "light",
        font: "black",
        background: "white"
    },
    dark: {
        id: "dark",
        font: "white",
        background: "black"
    }
}; 
*/

const initialState = {
    theme: temas.light,
    favoritos: [],
    flag: true
};
const funcionReducer = (state, action) => {
    switch (action.type) {
        case "SWITCHTHEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" }

        case "SETFAVORITOS":
            return { ...state, favoritos: action.payload};

        case "FLAG":
            return {...state, flag: action.payload};

        default:
            return state;
    }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(funcionReducer, initialState);

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};


