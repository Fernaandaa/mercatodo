import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import * as Server from './Server'


const Home = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    const listProducts = async () => {
        try {
            const res = await Server.listProducts();
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listProducts();
    }, [])


    const handeleDelete = async (id) => {
        await Server.deletProduct(id);
        listProducts()
    }
    return (
        <>

            <div className="container-buttons d-flex justify-content-between mb-1">
                <button className="btn btn-primary">Filtrar</button>
                <Link to="/add">
                    <button className="btn btn-primary">Agregar <br /> Producto + </button>
                </Link>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombre del producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (

                                <tr>
                                    <th>{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button type="button" onClick={() => history.push(`/update/${product.id}`)} className="btn btn-dark"><i className="fas fa-edit"></i></button>
                                        <button type="button" onClick={() => product.id && handeleDelete(product.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};
export default Home;