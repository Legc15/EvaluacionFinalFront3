import React, { useState } from "react";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
    });

    const [mensaje, setMensaje] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validar = () => {
            if (formData.nombre.length < 5 || !formData.email.includes('@')) {
                return 'Por favor verifique su información nuevamente';
            }

            return `Gracias ${formData.nombre}, te contactaremos cuanto antes vía email.`;
        };

        const mensajeValidacion = validar();
        setMensaje(mensajeValidacion);
    };

    return (
        <div className="form-container">
            
            <form onSubmit={handleSubmit}>
            
                <div>
                    <label htmlFor="nombre" ></label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Name:"
                    />
                </div>
                <div>
                    <label htmlFor="email" ></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email:"
                    />
                </div>
                {mensaje && <p className={mensaje.includes('Gracias') ? 'exito' : 'error'}>{mensaje}</p>}
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}


export default Form;
