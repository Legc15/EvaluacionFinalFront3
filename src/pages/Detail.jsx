import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Detail = () => {
    const [odontologo, setOdontologo] = useState(null); 
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setOdontologo(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    console.log(odontologo);
    
    return (
        <div className='table'>
            <h2>Dentist details</h2>
            
            <table >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Web site</th>
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



