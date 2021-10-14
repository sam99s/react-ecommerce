import React from 'react';
import { Link } from 'react-router-dom';
import logo200 from './logo200.png';
import logoLinkedIn from './logoLinkedIn.png';
import logoGitHub from './logoGitHub.png';
import './Footer.scss';

export const Footer = () => {

    return(
        <footer className="container-fluid d-flex justify-content-between align-items-center mt-5">
            <div className="col-4">
                <Link to="/">
                    <img src={logo200} alt="logo"/>
                </Link>
            </div>

            <div className="col-4">
                <span>Depordev® / Todos los derechos reservados</span>
            </div>

            <div className="col-4">
                <div className="container-fluid d-flex text-center">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/sam99s/" target="_blank" rel="noreferrer">
                            <img className="social-logo" src={logoLinkedIn} alt="LinkedIn"/>
                        </a>                    
                    </div>
                    <div className="social">
                        <a href="https://github.com/sam99s" target="_blank" rel="noreferrer">
                            <img className="social-logo" src={logoGitHub} alt="GitHub"/>
                        </a>                    
                    </div>
                    
                </div>
            </div>
        </footer>
    )
    
}
