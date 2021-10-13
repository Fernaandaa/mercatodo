import React from "react";

import "./User.css";
const User = () => {
  return (
    <>
      <div className="container-user">
        <div className="menu__user">
          <div className="menu__user--title">
            <h2>Hola Usuario</h2>
          </div>
          <div className="menu__user--input">
            <input type="text" placeholder="Buscar..." />
           
          </div>
          <div className="user__buttom">
            <button type="button" className="btn .bg-info">
              Filtrar
            </button>
          </div>
        </div>

        <table className="table table-muted tableUser">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Producto</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Existencia</th>
              <th scope="col">Fecha</th>
              <th scope="col">Categoria</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Arroz</td>
              <td>Diana</td>
              <td>Existe</td>
              <td>01/02/2021</td>
              <td>Agranel</td>
              <td>Arroz doña pepa</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Arroz</td>
              <td>Diana</td>
              <td>Existe</td>
              <td>01/02/2021</td>
              <td>Agranel</td>
              <td>Arroz doña pepa</td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Arroz</td>
              <td>Diana</td>
              <td>Existe</td>
              <td>01/02/2021</td>
              <td>Agranel</td>
              <td>Arroz doña pepa</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Arroz</td>
              <td>Diana</td>
              <td>Existe</td>
              <td>01/02/2021</td>
              <td>Agranel</td>
              <td>Arroz doña pepa</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Arroz</td>
              <td>Diana</td>
              <td>Existe</td>
              <td>01/02/2021</td>
              <td>Agranel</td>
              <td>Arroz doña pepa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
