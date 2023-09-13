import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import DetalleOdontologo from '../Components/DetalleOdontologo'; (Foto hardcodeada d eodontologo)
import axios from 'axios';


const Detail = () => {
    const [odontologo, setOdontologo] = useState(null); // Estado inicial vacío
    const { id } = useParams(); // Captura la ID de la URL

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setOdontologo(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    console.log(odontologo);
    
    return (
        <div>
            <h2>Detalles del Odontólogo</h2>
            
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Página Web</th>
                </tr>
                <tr>
                    <td>{odontologo?.name}</td>
                    <td>{odontologo?.email}</td>
                    <td>{odontologo?.phone}</td>
                    <td>{odontologo?.website}</td>
                </tr>
            </table>
            

        </div>
    );
};

export default Detail;



