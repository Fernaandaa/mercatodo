import React from "react";
import './Add.css'




const Add = () => {
    return (
        <>
            <div className="container-main-add">
                <div className="container-add">
                    <div className="container-icons">
                    <p className="title-add">Agregar producto</p><i className="fas fa-times fa-times"></i>
                    </div>
                    <input className="form-control" type="text"
                        id="id"
                        name="id"
                        placeholder="ID" />
                    <input className="form-control" type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre" />
                    <input className="form-control" type="text"
                        id="Provedor"
                        name="Provedor"
                        placeholder="Provedor" />
                    <input className="form-control" type="text"
                        id="Existencia"
                        name="Existencia"
                        placeholder="Existencia" />
                    <input className="form-control" type="fecha"
                        id="Fecha"
                        name="Fecha"
                        placeholder="Fecha" />
                    <input className="form-control" type="text"
                        id="Categoria"
                        name="Categoria"
                        placeholder="Categoria" />
                    <input className="form-control" type="text"
                        id="Descripcion"
                        name="Descripcion"
                        placeholder="Descripcion" />

                </div>

            </div>
            <button className="button-agregar">Agregar</button>
        </>





    );
}

export default Add;