import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './Cart.scss'
import { Link } from 'react-router-dom'

export const Cart = () => {
    
    const {carrito, eliminarDelCarrito, vaciarCarrito, totalCarrito} = useContext(CartContext);

    

    return (
        <div className="container">

            <div className="d-flex flex-wrap">
                <h1 className="col-12 text-decoration-underline text-center">Resumen de compra</h1>
                
                <span className="col-3"></span>
                <span className="col-6 posicionarMensaje">                  
                    {carrito.length > 0 ? <prev></prev> : <Link to="/"><button className="btn btn-primary VerMsj">Carrito vacio, volver a comprar</button></Link>}
                </span>                
                <span className="col-3"></span>
            </div>

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
                <span className="Total">Total: ${totalCarrito()}</span>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-danger col-2" onClick={vaciarCarrito}>Vaciar carrito</button>
                <span className="col-1"></span>
                <button className="btn btn-success col-2">Pagar</button>
            </div>
        </div>
    )
}
