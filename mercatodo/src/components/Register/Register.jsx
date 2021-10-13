import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Register.css"


const Register = () => {

    //State para iniciar sesion
    const [usuario, setGuardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar:'',
    });

    //Extraer del usuario

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setGuardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }


    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        
    }


    return (
        <>
            <div className="form-usuario2">
                <div className="contenedor-form">
                    <h1 className="title-register">Registrese para continuar</h1>

                    <form
                        onSubmit={onSubmit}

                    >
                        <div className="campo-form">

                            <input className="form-control"type="text"
                                id="Nombre"
                                name="Nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">

                            <input className="form-control" type="email"
                                id="email"
                                name="email"
                                placeholder="Tu Email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <input className="form-control" type="password"
                                id="password"
                                name="password"
                                placeholder="Tu Password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <input className="form-control" type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Repite tu Password"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>


                    </form>
                    <Link to="/" className="link1">
                        Volver a Iniciar Sesion
                    </Link>
                </div>
               

            </div>
            <button className="btn-login">Registrarse</button>
            

        </>

    );



}

export default Register;

