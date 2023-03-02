import React from "react";
import './Address.css';

export const Address = () => {
    return (
        <div className="address">
            <h2>Our Address</h2>
            <div className="address-info">
                <p>Fictional Street, 1000</p>
                <p>Fake Province, Belgium</p>
            </div>
            <div className="map-div">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9998.527921146153!2d5.300295246252433!3d51.20743261671593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c12d4073f8214f%3A0x914ffdfac5d5a54d!2sKattenbos%2C%203920%20Lommel!5e0!3m2!1spt-BR!2sbe!4v1677165892468!5m2!1spt-BR!2sbe" 
                    title="Restaurant location map" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Address;