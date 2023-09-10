import React from 'react';

const DetalleOdontologo = ({ match }) => {
    const odontologoId = match.params.id; // Captura la ID de la URL

    // Utiliza la ID para obtener los detalles del odontólogo desde tu fuente de datos (por ejemplo, localStorage o una API)

    return (
        <div>
            <h2>Detalles del Odontólogo</h2>
            {/* Muestra los detalles del odontólogo */}
        </div>
    );
};

export default DetalleOdontologo;





