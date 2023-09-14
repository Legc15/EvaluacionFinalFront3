import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

function Home() {
    const [odontologos, setOdontologos] = useState([]);

    useEffect(() => {
        // Sacamos datos de odontólogos de la API
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

        // los datos del localStorage los convertimos de nuevo a un objeto
        const datosGuardados = localStorage.getItem('datosAPI');
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            setOdontologos(datos); 
        } else {
            // Si no hay datos en el localStorage, obtener los datos de la API y almacenarlos
            obtenerInfo();
        }
    }, []);

    return (
        <main>
            <h1>Our Dentist</h1>
            <div className="card-grid">
                {odontologos.map((odontologo) => (
    
                    <Card name={odontologo.name} username={odontologo.username} id={odontologo.id} />
                    
                ))}
            </div>
        </main>
    );
}

export default Home;
