import React, {useContext, useEffect } from  'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';
import { obtenerFavoritosDeStorage } from '../Components/utils/localStorage';

const Favoritos =()=>{

    const {state, dispatch} = useContext(ContextGlobal);

    useEffect(() => {
        const favoritos = obtenerFavoritosDeStorage();
        dispatch({type: "SETFAVORITOS", payload: favoritos})
    }, [dispatch, state.favoritos])

    return (
        <div>
            <h1>Your favourites dentists</h1>
            <div className='card-grid'>
                {state.favoritos.map((odontologo) => (
                    <Card 
                        key={odontologo.id} 
                        name={odontologo.name} 
                        username={odontologo.username} 
                        id={odontologo.id}  
                    />
                ))}
            </div>
        </div>
    )
}

export default Favoritos
