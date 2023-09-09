import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

function Home() {
    const [odontologos, setOdontologos] = useState([]);

    useEffect(() => {
        // Función para obtener datos de odontólogos de la API
        const obtenerInfo = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    const datos = response.data;
                    localStorage.setItem('datosAPI', JSON.stringify(datos));
                    setOdontologos(datos);
                })
                .catch((error) => {
                    console.error('Error al obtener datos de la API:', error);
                });
        };

        // Recuperar los datos del localStorage y convertirlos de nuevo a un objeto
        const datosGuardados = localStorage.getItem('datosAPI');
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            setOdontologos(datos); // Establecer los odontólogos en el estado
        } else {
            // Si no hay datos en el localStorage, obtén los datos de la API y almacénalos
            obtenerInfo();
        }
    }, []);

    return (
        <main>
            <h1>Nuestros Odontólogos</h1>
            <div className="card-grid">
                {odontologos.map((odontologo) => (
                    <Link
                        key={odontologo.id}
                        to={`/home/${odontologo.id}`}
                        className="odontologo-link"
                    >
                        <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;
