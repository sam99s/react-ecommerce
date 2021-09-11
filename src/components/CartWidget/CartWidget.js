import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {carrito ,cantidadCarrito, totalCarrito} = useContext(CartContext)

    return (
        <Link to="/cart">
            <div className="cart-widget container-fluid">            
                <FaShoppingCart/>
                <span>{cantidadCarrito()}</span>
                <ol className="toBuy">
                    <div className="final container-fluid">
                        <span className="final-precio col-12">Total: ${totalCarrito()}</span>
                    </div>
                    {carrito.map( prod => (
                        <>
                            <li>{prod.title}: {prod.cantidad}</li>                            
                            <li className="dropdown-divider"></li>
                        </>
                    ))}                    
                </ol>
            </div>
        </Link>
    )
}
