
import "../index.css";
import axios from "axios";
import Card from "../Components/Card";

function Home() {


    //Se obtienen datos de odontologos de la api
    const obtenerInfo = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const datos = response.data;

                localStorage.setItem('datosAPI', JSON.stringify(datos));
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:',error);
            });

    }


    return (
        <main>
            <h1>Nuestros Odontólogos</h1>
            <div>

            </div>
        </main>
    )
}

export default Home
