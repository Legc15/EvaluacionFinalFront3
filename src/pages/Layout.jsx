import { Outlet, Link } from 'react-router-dom';
import "../index.css"

function  Layout(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/detalle-dentista">Detalle Dentista</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/> 
        </div>
    )
}

export default Layout;
