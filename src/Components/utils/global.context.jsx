import React, { createContext, useReducer } from "react";
import "../../index.css";
export const ContextGlobal = createContext(undefined)


const initialState = {
    theme: "light",
    favoritos: [],
    flag: true,
};
const funcionReducer = (state, action) => {
    switch (action.type) {
        case "SWITCHTHEME":
            return { theme: state.theme === "light" ? "dark" : "light"}

        case "SETFAVORITOS":
            return { ...state, favoritos: action.payload};

        case "FLAG":
            return {...state, flag: action.payload};

        default:
            return state;
    }
};

;

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(funcionReducer, initialState);

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};


