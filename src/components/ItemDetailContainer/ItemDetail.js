import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'
import './ItemDetail.scss'

export const ItemDetail = ({category, id, title, description, pictureUrl, price, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, title, description, pictureUrl, price, cantidad
        })
    }

    return (
        <div className="container text-center mt-5">
            <h2>{title}</h2>
            <hr/>
            <p className="fw-bolder fs-4">precio: ${price}</p>
            <p className="fs-6">Stock Disponible: {stock}</p>


            <img src={pictureUrl} alt={title} className="pictureDetail" />
            <p className="fw-normal">{description}</p>

            <Counter 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAdd} 
                agregado={isInCart(id)}
            />
            <Link to={`/category/${category}`} className="btn btn-primary mb-5">Volver</Link>
        </div>
    )
}
