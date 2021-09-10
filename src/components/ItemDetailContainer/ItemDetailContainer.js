import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../Firebase/config'
import { ItemDetail } from './ItemDetail'



export const ItemDetailContainer = () => {

    const {loading, setLoading} = useContext(UIContext)

    const { itemId } = useParams()
    const [item, setItem] = useState(null)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('items')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
            setItem( {...doc.data(), id: doc.id} )
            })
            .finally(()=> { setLoading(false)})


    }, [itemId, setLoading])


    return (
        <div>
            
            {loading 
                ? <h1>Cargando...</h1>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
