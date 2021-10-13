import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import {Link} from 'react-router-dom'
import * as Server from '../home/Server'


const ProductsForm = () => {

    const initialState = {id: 0, name:"", quantity:0}
    const params = useParams();

    console.log(params)
    const history = useHistory()
    const [product, setProduct] = useState(initialState)

    const handeleChange = (e) =>{
        setProduct({...product, [e.target.name] : e.target.value})
    }

    const handeleSubmit = async (e) => {
        e.preventDefault()
        try{
            let res;

            if(!params.id){
                res = await Server.addProduct(product);
                const data = await res.json();
                if(data.mesage === "Success"){
                    setProduct(initialState)
                }
            }else{
                await Server.update(params.id, product)
            }
            history.push('/')
        }catch(error){
            console.log(error)
        }
    }

    const getProduct = async (productId) => {
            try{
                const res = await Server.getProduct(productId)
                const data = await res.json();
                const {name, quantity} = data.products
                setProduct({name, quantity})
            }catch(error){
                console.log(error)
            }
    }

    useEffect(() => {
        if (params.id){
            getProduct(params.id)
        }
     
    }, [])
    return (
        <div className="container">
            <div className="container-text">
                <p>{ params.id ? 'Actualizar Producto': 'Agregar Producto' }</p>
            </div>
            <div className="row">
                <div className="col">
                    <form action="" />
                    <label htmlFor="">Nombre del producto</label>
                    <input type="text" className="form-control" name="name" value={product.name} onChange={handeleChange} />
                    <label htmlFor="">Cantidad</label>
                    <input type="number" className="form-control" name="quantity" value={product.quantity} onChange={handeleChange} />
                    <Link to="/add">
                    <button className="btn btn-dark mt-3" onClick={handeleSubmit}> { params.id ? 'Actualizar': 'Agregar Producto'}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsForm