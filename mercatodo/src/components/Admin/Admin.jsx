import React, { Fragment } from "react";
import "./Admin.css"
const Admin = () => {
  return (
    <Fragment>
    
   

      <div className="menu">
        <div className="menu__filter">
          <h2>Hola Admin</h2>
          <button  type="button" class="button1 btn btn-success"><i className="fas fa-filter"></i></button>
        </div>
        <div className="menu__input">
          <input type="text" />
        </div>
        <div>
          <button  type="button" class="button1 btn btn-success"><i className="fas fa-plus"></i></button>
        </div>
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
            <td>
          
          <button type="submit"  class="btn btn-info "><i class="fas fa-wrench"></i></button>
        </td>
        <td>
       
          <button type="submit"  class="btn btn-danger "><i class="far fa-trash-alt"></i></button>
        </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Arroz</td>
            <td>Diana</td>
            <td>Existe</td>
            <td>01/02/2021</td>
            <td>Agranel</td>
            <td>Arroz doña pepa</td>
            <td>
          
          <button type="submit"  class="btn btn-info "><i class="fas fa-wrench"></i></button>
        </td>
        <td>
       
          <button type="submit"  class="btn btn-danger "><i class="far fa-trash-alt"></i></button>
        </td>
          </tr>
          
          <tr>
            <th scope="row">3</th>
            <td>Arroz</td>
            <td>Diana</td>
            <td>Existe</td>
            <td>01/02/2021</td>
            <td>Agranel</td>
            <td>Arroz doña pepa</td>
            <td>
          
          <button type="submit"  class="btn btn-info "><i class="fas fa-wrench"></i></button>
        </td>
        <td>
       
          <button type="submit"  class="btn btn-danger "><i class="far fa-trash-alt"></i></button>
        </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Admin;
