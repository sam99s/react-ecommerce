import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../Firebase/config'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] = useState([])

    
    useEffect( ()=> {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('items')

        if (catId) {
            const filtrado = productos.where('category', '==', catId)
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        } else {
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        }

    }, [catId, setLoading])


    return (
        <>
            {loading 
             ? <h2 className="text-center">Cargando...</h2>
             : <ItemList productos={data}/>    
            }
        </>
    )
}
