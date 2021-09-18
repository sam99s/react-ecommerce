import React from 'react'
import { Redirect } from 'react-router';
import { useContext, useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';
import { generarOrden } from '../../Firebase/generarOrden';
import './Checkout.scss'

export const Checkout = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        tel: 0
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length >= 3 && values.email.length > 5 && values.tel.length >= 10 && e.target.email.value === e.target.mail.value) {
            generarOrden(values, carrito, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Compra fue registrada!',
                        text: `ID de seguimiento: ${res}`,
                        confirmButtonText: '¡Hecho!'
                    })

                    vaciarCarrito()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise la información ingresada.'
              })
        }


    }
    

    return (
        <div>
            <h2 className="text-center">Checkout</h2>
            <hr/>
            
        {!carrito.length 
            ? <Redirect to="/"/>
            :
            <>        
                <div className="text-center container">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label for="buyerName" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="buyerName"
                                placeholder="Ej: Samuel Schulz"
                                value={values.nombre}
                                onChange={handleInputChange}
                                name="nombre"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label for="buyerTel" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="buyerTel"
                                placeholder="Ej: 0123456789"
                                value={values.tel}
                                onChange={handleInputChange}
                                name="tel"
                                required
                            />
                        </div>

                        <div className="mb-3 d-flex container flex-wrap">
                            <label for="buyerEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="buyerEmail"
                                placeholder="Ej: ejemplo@email.com"
                                value={values.email}
                                onChange={handleInputChange}
                                name="email"
                                required
                            />
                            <label for="buyerMail" className="form-label">Vuelve a ingresar tu Email</label>
                            <input
                                type="mail"
                                className="form-control"
                                id="buyerMail"
                                value={values.mail}
                                onChange={handleInputChange}
                                name="mail"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-success">Finalizar Compra</button>
                    </form>
                </div>
            </>
        }

        </div>
    )
}
