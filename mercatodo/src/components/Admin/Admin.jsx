import React from "react";
import "./Admin.css"
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <div className="container-admin">
      <div className="menu">
        <div className="menu__filter">
          <h2>Hola Admin</h2>
          <button  type="button" className="btn .bg-info">Filtrar</button>
        </div>
        <div className="menu__input">
          <input type="text" />
        </div>
        <div>
          <Link to="/add">
          <button  type="button" className="btn .bg-info">Agregar</button>
          </Link>
        </div>
      </div>

      <table className="table table-muted">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Producto</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Existencia</th>
            <th scope="col">Fecha</th>
            <th scope="col">Categoria</th>
            <th scope="col">Descripción</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
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
          
          <button type="submit"  className="btn btn-info "><i className="fas fa-wrench icon"></i></button>
        </td>
        <td>
       
        <button type="submit"  className="btn .bg-secondary "><i className="far fa-trash-alt icon2"></i></button>
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
          
          <button type="submit"  className="btn btn-info "><i className="fas fa-wrench"></i></button>
        </td>
        <td>
       
        <button type="submit"  className="btn .bg-secondary "><i className="far fa-trash-alt icon2"></i></button>
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
          
          <button type="submit"  className="btn btn-info "><i className="fas fa-wrench"></i></button>
        </td>
        <td>
       
        <button type="submit"  className="btn .bg-secondary "><i className="far fa-trash-alt icon2"></i></button>
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
          
          <button type="submit"  className="btn btn-info "><i className="fas fa-wrench"></i></button>
        </td>
        <td>
       
        <button type="submit"  className="btn .bg-secondary "><i className="far fa-trash-alt icon2"></i></button>
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
          
          <button type="submit"  className="btn btn-info "><i className="fas fa-wrench"></i></button>
        </td>
        <td>
       
        <button type="submit"  className="btn .bg-secondary "><i className="far fa-trash-alt icon2"></i></button>
        </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
