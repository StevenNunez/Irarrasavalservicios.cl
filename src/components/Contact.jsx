import React, { useState } from 'react';
import { Mail, Phone, MapPin, FileText, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
    const [whatsappMessage, setWhatsappMessage] = useState('');

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        if (!whatsappMessage.trim()) return;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/56954658390?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="contacto" className="section" style={{ background: 'var(--bg-darker)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="hero-badge">Contáctanos</span>
                    <h2 className="section-title">Hablemos de tu Proyecto</h2>

                    <form
                        onSubmit={handleWhatsAppSubmit}
                        style={{
                            maxWidth: '500px',
                            margin: '2rem auto 0',
                            display: 'flex',
                            gap: '0.5rem',
                            position: 'relative'
                        }}
                    >
                        <div style={{ position: 'relative', flex: 1 }}>
                            <MessageCircle
                                size={20}
                                style={{
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#25D366'
                                }}
                            />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Escríbenos directamente al WhatsApp..."
                                value={whatsappMessage}
                                onChange={(e) => setWhatsappMessage(e.target.value)}
                                style={{ paddingLeft: '40px' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                                padding: '0 1.5rem',
                                background: '#25D366',
                                boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)'
                            }}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                    <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Atención inmediata vía WhatsApp
                    </p>
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
                                <a href="mailto:administracion@irarrazavalservicios.cl" style={{ color: 'var(--text-muted)' }}>administracion@irarrazavalservicios.cl</a>
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
