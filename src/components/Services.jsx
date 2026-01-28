import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Hammer, Building2, Wrench, Cpu, HardHat } from 'lucide-react';

const services = [
    {
        icon: <Zap size={32} />,
        title: "Electricidad Industrial",
        desc: "Mantenimiento y montaje eléctrico de alta precisión para faenas mineras e industrias."
    },
    {
        icon: <Cpu size={32} />,
        title: "Automatización",
        desc: "Ingeniería de automatización y control para optimizar procesos productivos."
    },
    {
        icon: <Wrench size={32} />,
        title: "Reparación de Equipos",
        desc: "Diagnóstico y reparación de equipos eléctricos industriales críticos."
    },
    {
        icon: <Building2 size={32} />,
        title: "Obras Civiles",
        desc: "Construcción y edificación de obras civiles menores e infraestructuras."
    },
    {
        icon: <Hammer size={32} />,
        title: "Montaje y Estructuras",
        desc: "Soluciones integrales en montaje estructural y habilitación de espacios."
    },
    {
        icon: <HardHat size={32} />,
        title: "Proyectos Mineros",
        desc: "Ejecución de proyectos especializados cumpliendo normativas de seguridad minera."
    }
];

export const Services = () => {
    return (
        <section id="servicios" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <span className="hero-badge" style={{ marginBottom: '1rem' }}>Que Hacemos</span>
                    <h2 className="section-title">Nuestras Soluciones</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Un enfoque multidisciplinario para abordar los desafíos de la industria moderna.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-icon">
                                {service.icon}
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
