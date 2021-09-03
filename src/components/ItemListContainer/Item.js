import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ( {pictureUrl, title, description, price, id} ) => {


    return (
        <div className="card col-4">
            <img src={pictureUrl} className="item-picture" alt={title} />
            <div className="card-body">
                <h4>{title}</h4>
                <p className="card-text">{description}</p>                               
                <Link to={`/detail/${id}`} className="container btn btn-info">Ver detalles</Link>
                <span className="badge bg-success precio">${price}</span>                               
            </div>
        </div>
    )
}
