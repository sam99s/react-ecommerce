import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartWidget } from '../CartWidget/CartWidget'
import logo200 from './logo200.png'
import './NavBar.scss'

export const NavBar = () => {

    const {cantidadCarrito} = useContext(CartContext)

    let verificacion = (cantidadCarrito) => {
        if(cantidadCarrito != 0){
            return true
        }else{
            return false
        }
    }

    return (
        <header className="encabezado container-fluid mb-5">
            <div className="col-2 logo">
                <Link to={"/"}>
                    <img src={logo200} />
                </Link>
            </div>
            
            <div className="col-8">
                <nav className="navLink">
                    <Link className="mx-1" to={"/"}>Inicio</Link>
                    <Link className="mx-1" to={"/category/futbol"}>Futbol</Link>
                    <Link className="mx-1" to={"/category/natacion"}>Natacion</Link>
                    <Link className="mx-1" to={"/category/baloncesto"}>Baloncesto</Link>
                    <Link className="mx-1" to={"/category/tenis"}>Tenis</Link>
                    <Link className="mx-1" to={"/category/golf"}>Golf</Link>
                    <Link className="mx-1" to={"/category/handball"}>Handball</Link>
                    <Link className="mx-1" to={"/category/voley"}>Voley</Link>
                    <Link className="mx-1" to={"/category/rugby"}>Rugby</Link>
                </nav>
            </div>

            <div className="col-2 cart">
                <CartWidget/> 
            </div>            


        </header>
    )
  
}
