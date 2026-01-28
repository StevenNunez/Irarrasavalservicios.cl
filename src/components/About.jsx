import React from 'react';
import aboutImg from '../assets/about.png';

export const About = () => {
    return (
        <section id="nosotros" className="section">
            <div className="container about-container">
                <div>
                    <span className="hero-badge">Quiénes Somos</span>
                    <h2 className="section-title" style={{ marginTop: '1rem' }}>
                        Compromiso y <span className="title-gradient">Excelencia Técnica</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Irarrázaval Servicios SpA nace con la misión de entregar soluciones eléctricas e industriales de alto estándar en la IV Región y todo Chile.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Liderados por <strong>Mario Irarrázaval Araya</strong>, Ingeniero Electrónico Industrial, combinamos experiencia técnica con una ejecución precisa. Nuestra expansión hacia obras civiles refleja nuestra capacidad de adaptación y crecimiento integral para servir mejor a la minería y construcción.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {[
                            { label: 'Años Exp.', value: '+10' },
                            { label: 'Proyectos', value: '+50' },
                            { label: 'Clientes', value: '100%' },
                        ].map((stat, i) => (
                            <div key={i} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-image" style={{ overflow: 'hidden' }}>
                    <img
                        src={aboutImg}
                        alt="Servicios Eléctricos Industriales"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
};
