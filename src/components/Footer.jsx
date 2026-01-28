import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <Logo />
                    <p style={{ maxWidth: '400px' }}>
                        Soluciones integrales en servicios eléctricos industriales y construcción.
                    </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                    <p>&copy; {new Date().getFullYear()} Irarrázaval Servicios SpA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
