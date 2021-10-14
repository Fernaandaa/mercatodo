import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Server from '../home/Server'


const ProductsForm = () => {

    const initialState = { id: 0, pro_category: "", pro_date: "", pro_description: "", pro_existences: 0, pro_name: "", pro_provider: "" }
    const params = useParams();

    console.log(params)
    const history = useHistory()
    const [product, setProduct] = useState(initialState)

    const handeleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handeleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res;

            if (!params.id) {
                res = await Server.addProduct(product);
                const data = await res.json();
                if (data.mesage === "Success") {
                    setProduct(initialState)
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Producto Agregado Correctamente ',
                    timer: 1500,
                    showConfirmButton: false,
                })
            } else {
                await Server.update(params.id, product)

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 2800,
                    timerProgressBar: true
                })
                await Toast.fire({
                    icon: 'success',
                    title: `Producto Actualizado:, ${product.pro_description}`
                })
            }
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (productId) => {
        try {
            const res = await Server.getProduct(productId)
            const data = await res.json();
            const { pro_category, pro_date, pro_description, pro_existences, pro_name, pro_provider } = data.products
            setProduct({ pro_category, pro_date, pro_description, pro_existences, pro_name, pro_provider })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            getProduct(params.id)
        }

    }, [])
    return (
        <div className="container">
            <div className="container-text">
                <p>{params.id ? 'Actualizar Producto' : 'Agregar Producto'}</p>
            </div>
            <div className="row">
                <div className="col">
                    <form action="" />
                    <label htmlFor="">Categoria</label>
                    <input type="text" className="form-control" name="pro_category" value={product.pro_category} onChange={handeleChange} />
                    <label htmlFor="">Fecha</label>
                    <input type="text" className="form-control" name="pro_date" value={product.pro_date} onChange={handeleChange} />
                    <label htmlFor="">Description</label>
                    <input type="text" className="form-control" name="pro_description" value={product.pro_description} onChange={handeleChange} />
                    <label htmlFor="">Existencias</label>
                    <input type="number" className="form-control" name="pro_existences" value={product.pro_existences} onChange={handeleChange} />
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="form-control" name="pro_name" value={product.pro_name} onChange={handeleChange} />
                    <label htmlFor="">Provedor</label>
                    <input type="text" className="form-control" name="pro_provider" value={product.pro_provider} onChange={handeleChange} />

                    <button className="btn btn-dark mt-3" onClick={(e) => handeleSubmit(e)}> { params.id ? 'Actualizar': 'Agregar Producto'}</button>

                </div>
            </div>
        </div>
    )
}


export default ProductsForm