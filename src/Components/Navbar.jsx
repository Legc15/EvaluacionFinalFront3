import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";




const Navbar = () => {
    const { state, dispatch } = useContext(ContextGlobal);

    const cambiarTema = () => {
        dispatch({ type: "SWITCHTHEME"});
    };
    const buttonTitle = state.theme === "light" ? "Click for Dark Mode" : "Click for light Mode"; 
    

    return (
        <div className="nav-container">
            
            <div className="nav-title">
                <img 
                    className="logoDiente"
                    src='./public/images/Tooth-icon.jpg' 
                    alt="LogoDiente" 
                /> 
                <h1>Denta-Fix</h1>
            </div>

            <nav>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/contacto">Contact</Link>
                    <Link to="/favoritos">Fav</Link>

                    <button onClick={cambiarTema}
                            title={buttonTitle}>
                        {state.theme === "light" ?"🌙":"🌞" }
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;