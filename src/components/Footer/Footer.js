import React from 'react';
import { Link } from 'react-router-dom';
import logo200 from './logo200.png';
import './Footer.scss';

export const Footer = () => {

    return(
        <footer className="container-fluid d-flex justify-content-between align-items-center">
            <div className="col-4">
                <Link to="/">
                    <img src={logo200} />
                </Link>
            </div>

            <div className="col-4">
                <span>Depordev®/Todos los derechos reservados</span>
            </div>

            <div className="col-4">redes Sociales</div>
        </footer>
    )
    
}
