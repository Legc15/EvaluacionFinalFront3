import React from "react";


const Card = ({ name, username, id }) => {

    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage

        const tarjeta = {
            id,
            name,
            username,
        };

        // Convertir la tarjeta a una cadena JSON
        const tarjetaJSON = JSON.stringify(tarjeta);

        // Almacenar la tarjeta en el localStorage con una clave única
        localStorage.setItem(`tarjeta-${id}`, tarjetaJSON);

    }

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}

            <div>
                <img src="images/doctor.jpg" alt="foto odontologo"></img>

            </div>
            <h3>{name}</h3>
            <p>Username: {username}</p>
            <p>ID: {id}</p>

            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">Add fav</button>
        </div>
    );
};

export default Card;
