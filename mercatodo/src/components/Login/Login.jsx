import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom"


const Login = () => {

    //State para iniciar sesion
    const [usuario, setGuardarUsuario] = useState({
        email: '',
        password: ''
    });

    //Extraer del usuario

    const { email, password } = usuario;

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
                    <h1 className="title-login">INICIAR SESION</h1>

                    <form
                        onSubmit={onSubmit}

                    >
                        <div className="campo-form">

                            <input className="form-control"type="text"
                                id="email"
                                name="email"
                                placeholder="Tu email"
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


                    </form>
                    <Link to="/registro" className="link1">
                        Obtener cuenta
                    </Link>
                </div>

            </div>
            
                <Link to="/admin" className="link1">
                    <button className="btn-login">Iniciar Sesion</button>
                </Link>
            

        </>

    );



}

export default Login;

