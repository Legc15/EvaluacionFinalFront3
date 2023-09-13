import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



const Navbar = () => {
    const { state, dispatch } = useContext(ContextGlobal);

    const cambiarTema = () => {
        dispatch({ type: "SWITCHTHEME"});
    };



    return (
        <div className="nav-container">

            <div className="nav-title">
                <h1>Denta-Fix</h1>
            </div>

            <nav>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/contacto">Contact</Link>
                    <Link to="/favoritos">Favs</Link>

                    <button onClick={cambiarTema}>
                        {state.theme.id === "light" ?"🌙":"🌞" }

                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;