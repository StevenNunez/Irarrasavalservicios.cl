import React from 'react';
import { Logo } from './Logo';
import InteractiveLogo from './InteractiveLogo';

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
                    <p className="flex items-center justify-center gap-2 flex-wrap">
                        <span>&copy; {new Date().getFullYear()} Irarrázaval Servicios SpA. Todos los derechos reservados.</span>
                        <span className="hidden sm:inline">|</span>
                        <span className="flex items-center gap-1">
                            Desarrollado por 
                            <a href="https://www.teolabs.app" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity">
                                <InteractiveLogo variant="footer-small" className="text-[14px]" />
                            </a>
                            ®
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
