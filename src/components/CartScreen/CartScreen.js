import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './CartScreen.scss'

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div className="container">
            <h1 className="col-12 text-decoration-underline text-center">Resumen de compra</h1>

            {carrito.map(prod => (                
                <div key={prod.id} className="d-flex text-center mt-5">
                    <div className="col-4">
                        <img src={prod.pictureUrl} alt={prod.title} className="pictureCart"/>
                    </div>

                    <div className="col-4 align-self-center">
                        <h3>{prod.title}</h3>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio: ${prod.price * prod.cantidad}</p>
                        <button className="btn btn-danger" onClick={() => eliminarDelCarrito(prod.id)}>Eliminar <BsFillTrashFill/></button>
                        <hr/>
                    </div>
                </div>
            ))}

            <hr/>

            <div className="d-flex justify-content-center">
                <button className="btn btn-danger col-2" onClick={vaciarCarrito}>Vaciar carrito</button>
                <span className="col-1"></span>
                <button className="btn btn-success col-2">Pagar</button>
            </div>
        </div>
    )
}
