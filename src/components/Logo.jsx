import React from 'react';
import logo from '../assets/logo.png';

export const Logo = () => {
    return (
        <div className="logo-container">
            <img
                src={logo}
                alt="Irarrázaval Servicios SpA"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
            />
        </div>
    );
};
