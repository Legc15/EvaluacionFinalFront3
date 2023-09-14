import React, { useEffect, useState } from 'react';


const DetalleOdontologo = ({ odontologoId }) => {



  const [odontologoDetalles, setOdontologoDetalles] = useState(null);

  useEffect(() => {

    const datosGuardados = localStorage.getItem('datosAPI');
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      const odontologo = datos.find((o) => o.id === parseInt(odontologoId));

      if (odontologo) {

        setOdontologoDetalles(odontologo);
      }
    }
  }, [odontologoId]);

  return (
    <div>

      {odontologoDetalles ? (
        <div>
          <img src='https://st3.depositphotos.com/1743476/32257/i/450/depositphotos_322579018-stock-photo-smiling-doctor-standing-on-grey.jpg' alt="foto odontologo"></img>
          <p>Dentist ID: {odontologoDetalles.id}</p>
          <p>Name: {odontologoDetalles.name}</p>
          <p>Email: {odontologoDetalles.email}</p>
          <p>Web: {odontologoDetalles.website}</p>

        </div>
      ) : (
        <p>Cargando detalles del odontólogo...</p>
      )}
    </div>
  );
};

export default DetalleOdontologo;
