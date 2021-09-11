import React, { useContext, useState, useEffect } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {carrito ,cantidadCarrito, totalCarrito} = useContext(CartContext);
    const [view,setView] = useState(false);

    let contador = Number(cantidadCarrito())

    useEffect(() => {
        if(contador === 0){
            setView(true)
        }else{
            setView(false)
        }        
    }, [contador])

    useEffect(() => {
        if(view){
            document.getElementById('cartView').classList.remove('cart-widget')
            document.getElementById('cartView').classList.add('cart-widget-NaN')
        }else{
            document.getElementById('cartView').classList.add('cart-widget')
            document.getElementById('cartView').classList.remove('cart-widget-NaN')
        }
    }, [view])


    return (
        <Link to="/cart">
            <div id="cartView" className="cart-widget container-fluid">            
                <FaShoppingCart/>
                <span>{cantidadCarrito()}</span>              
                <ol className="toBuy">
                    <div className="final container-fluid">
                        <span className="final-precio col-12">Total: ${totalCarrito()}</span>
                    </div>
                    {carrito.map( prod => (
                        <>
                            <li key={prod.id}>{prod.title}: {prod.cantidad}</li>                            
                            <li key={prod.id} className="dropdown-divider"></li>
                        </>
                    ))}                    
                </ol>
            </div>
        </Link>
    )
}
