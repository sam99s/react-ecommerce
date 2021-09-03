import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import logo200 from './logo200.png'
import './NavBar.scss'

export const NavBar = () => {


    return (
        <header className="encabezado">
            <Link to={"/"}>
                <img src={logo200} />
            </Link>
            

            <nav>
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

            <CartWidget/>

        </header>
    )
  
}
