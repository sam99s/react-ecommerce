import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {
    console.log(agregado)

    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex container text-center">

                {
                    agregado 
                        ?
                        <div className="container d-flex mt-2 mb-2">
                            <span className="col-4"></span>
                            <Link to="/cart" className="col-4 text-center btn btn-success">Terminar mi compra</Link>
                            <span className="col-4"></span>
                        </div> 
                        :
                        <div className="container d-flex mt-5 mb-5">
                            <span className="col-3"></span>
                            <button className="btn btn-primary mx-1 col-1" onClick={handleRestar}>-</button>
                            <p className="col-1">{cantidad}</p>
                            <button className="btn btn-primary mx-1 col-1" onClick={handleSumar}>+</button>
                            <button className="btn btn-outline-success col-3" onClick={agregar}>Agregar al carrito</button>
                            <span className="col-3"></span>
                        </div>
                }



            </div>
        </>
    )
}
