import React from "react";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav id="navbar">
            <p id="restaurant-logo">Atatakai</p>
            <a href="#menu" className="header-link">Menu</a>
            <a href="#reservations" className="header-link">Reservations</a>
            <a href="#order" className="header-link">Order</a>
            <a href="#address" className="header-link">Address</a>
        </nav>
    );
}