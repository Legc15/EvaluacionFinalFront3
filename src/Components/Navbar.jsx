import { Link } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    return (
        <div className="nav-container">                
            <div>
                <h1 className="nav-title">Denta Lix</h1>
            </div>
            
            <nav>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/favoritos">Favoritos</Link>
                </div>

                <div>
                    <button>Change theme</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar