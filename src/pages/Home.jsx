
import "../index.css";
import axios from "axios";
import Card from "../Components/Card";

function Home() {

    const obtenerInfo = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
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
