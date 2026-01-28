import React from 'react';
import { Logo } from './Logo';

export const Header = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Logo />
                <div className="nav-links">
                    <a href="#inicio" className="nav-link">Inicio</a>
                    <a href="#servicios" className="nav-link">Servicios</a>
                    <a href="#nosotros" className="nav-link">Nosotros</a>
                    <a href="#contacto" className="nav-link">Contacto</a>
                </div>
                <a href="#contacto" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    Cotizar
                </a>
            </div>
        </nav>
    );
};
