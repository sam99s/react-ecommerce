import { createContext, useState } from "react";

// creación del contexto
export const CartContext = createContext()


// custom provider

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {

        const checkID = () => carrito.some(article => article.id === prod.id);
        
        if(!checkID){
            return alert('Ya cargo dicho articulo. Eliminelo del carrito y vuelva a escoger la cantidad si es que desesa modificarla.')
        }

        setCarrito([
            ...carrito,
            prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setCarrito( carrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        let cant = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
        if(cant === 0){
            return ""
        }else{
            return cant
        }
    }

    const totalCarrito = () => {
        return carrito.reduce((acum, producto) => acum + (producto.price * producto.cantidad), 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(el => el.id == id)
    }

    return (
        <CartContext.Provider value={{carrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, totalCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
