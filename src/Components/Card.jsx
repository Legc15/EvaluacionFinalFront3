import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setFavoritosStorage, eliminarDeFavorito, esFavorito } from "./utils/localStorage";

const Card = ({ name, username, id }) => {
    const { state, dispatch } = useContext(ContextGlobal);

    const addFav = () => {
        dispatch({ type: "FLAG" }); 
        if (!esFavorito(id)) {
            setFavoritosStorage({ name, username, id }); 
        } else {
            eliminarDeFavorito(id, name); 
        }
    };

    return (
        <div className="card">
            <Link to={`/odontologo/${id}`} className="card-link">
                <div>
                    <img src="./images/doctor.jpg" alt="foto odontologo" />
                </div>
                <h3>{name}</h3>
                <p>{username}</p>
            </Link>
            <button onClick={addFav} className="favButton">
                {esFavorito(id) ? "⭐ Favorito" : "Add to Favs"}
            </button>
        </div>
    );
};

export default Card;
