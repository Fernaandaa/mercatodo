import React, { useState } from "react";
import { Link } from "react-router-dom"


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
            <div className="form-usuario">
                <div className="contenedor-form ">
                    <h1 className="title-login">Registrese para continuar</h1>

                    <form
                        onSubmit={onSubmit}

                    >
                        <div className="campo-form">

                            <input type="text"
                                id="Nombre"
                                name="Nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">

                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Tu Email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <input type="password"
                                id="password"
                                name="password"
                                placeholder="Tu Password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <input type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Repite tu Password"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>


                    </form>
                    <Link to="/" className="link">
                        Volver a Iniciar Sesion
                    </Link>
                </div>

            </div>
            <div className="container-btn">
                <input className="buttom" type="submit" value="Registrarme" />
            </div>

        </>

    );



}

export default Register;

