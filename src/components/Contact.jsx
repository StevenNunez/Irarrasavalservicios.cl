import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contacto" className="section" style={{ background: 'var(--bg-darker)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="hero-badge">Contáctanos</span>
                    <h2 className="section-title">Hablemos de tu Proyecto</h2>
                </div>

                <div className="contact-grid">
                    <div>
                        <div className="contact-item">
                            <MapPin className="contact-icon" size={24} />
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Ubicación</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Marta Elba Miranda 1450, Citae</p>
                                <p style={{ color: 'var(--text-muted)' }}>Coquimbo, IV Región</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Phone className="contact-icon" size={24} />
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Teléfono</h4>
                                <a href="tel:+56954658390" style={{ color: 'var(--text-muted)' }}>+56 9 5465 8390</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Mail className="contact-icon" size={24} />
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                <a href="mailto:siispa.adm@gmail.com" style={{ color: 'var(--text-muted)' }}>siispa.adm@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FileText className="contact-icon" size={24} />
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Información Legal</h4>
                                <p style={{ color: 'var(--text-muted)' }}>RUT: 77.050.148-2</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nombre</label>
                            <input type="text" className="form-input" placeholder="Tu Nombre" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" className="form-input" placeholder="tu@email.com" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mensaje</label>
                            <textarea className="form-textarea" rows={4} placeholder="¿En qué podemos ayudarte?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
