import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-badge">Servicios Eléctricos Industriales y Construcción</span>
                    <h1 className="hero-title">
                        Potenciando el Futuro con <br />
                        <span className="title-gradient">Energía Segura</span>
                    </h1>
                    <p className="hero-subtitle">
                        Irarrázaval Servicios SpA ofrece soluciones de vanguardia en servicios eléctricos industriales
                        y construcción. Comprometidos con la excelencia y la seguridad.
                    </p>
                    <div className="flex" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#contacto" className="btn btn-primary">
                            Contáctanos <ArrowRight size={20} />
                        </a>
                        <a href="#servicios" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                            Ver Servicios
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
