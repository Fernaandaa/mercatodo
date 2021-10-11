import React from "react";


const Admin = () => {
  return (
    <>
     
      <div>
        <h2>Hola Admin</h2>
        <button>Filtrar</button>
      </div>
      
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
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
        </tbody>
      </table>
    </>
  );
};

export default Admin;
