import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setFavoritosStorage, eliminarDeFavorito, esFavorito } from "./utils/localStorage";


const Card = ({ name, username, id }) => {


    const { state, dispatch } = useContext(ContextGlobal);

    const addFav = () => {
        dispatch({ type: FLAG })
        if (!esFavorito(id)) {
            setFavoritoStorage({ name, username, id })
        } else {
            eliminarDeFavoritos(id, name)
        }

        const tarjeta = {
            id,
            name,
            username,
        };

        {/* Convertir la tarjeta a una cadena JSON*/}
        const tarjetaJSON = JSON.stringify(tarjeta);

        // Almacenar la tarjeta en el localStorage con una clave única
        localStorage.setItem(`tarjeta-${id}`, tarjetaJSON);

    }

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            <Link 
                to={`/odontologo/${id}`} 
                className="card-link">
                
                <div>
                    <img 
                        src='./images/doctor.jpg' 
                        alt="foto odontologo">
                    </img>
                </div>
                <h3>{name}</h3>
                <p>{username}</p>
            </Link>

            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}



            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">{esFavorito(id) ? "⭐" : "Add to Favs"}</button>



        </div>
    );
};

export default Card;
