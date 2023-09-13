import React from 'react';
import { useParams } from 'react-router-dom';
import DetalleOdontologo from '../Components/DetalleOdontologo';

const Detail = () => {
    const { id } = useParams(); // Captura la ID de la URL

    return (
        <div>
            <h2>Detalles del Odontólogo</h2>
            <DetalleOdontologo odontologoId={id} />

        </div>
    );
};

export default Detail;



