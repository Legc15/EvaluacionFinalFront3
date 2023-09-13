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
            <div>
                <h1 className="nav-title">Denta Lix</h1>
            </div>

            <nav>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/favoritos">Favoritos</Link>
                </div>

                <div>
                    <button onClick={cambiarTema}>
                        {state.theme.id === "light" ?  "🌞":"🌙" }

                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;