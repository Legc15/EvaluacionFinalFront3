import React from 'react';

const DetalleOdontologo = ({ match }) => {
  // Captura la ID del odontólogo desde los parámetros de la URL
  const odontologoId = match.params.id;

  // En este punto, puedes usar la ID para obtener los detalles del odontólogo desde tu fuente de datos
  // y mostrarlos en esta página de detalles.

  return (
    <div>
      <h2>Detalles del Odontólogo</h2>
      <p>ID del Odontólogo: {odontologoId}</p>
      {/* Mostrar otros detalles del odontólogo aquí */}
    </div>
  );
};

export default DetalleOdontologo;
