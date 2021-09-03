import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] = useState([])

    
    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])


    return (
        <>
            {loading 
             ? <h2 className="text-center">Cargando...</h2>
             : <ItemList productos={data}/>    
            }
        </>
    )
}
