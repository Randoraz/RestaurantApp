import React from "react";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav id="navbar">
            <p id="restaurant-logo">Atatakai</p>
            <div id="navbar-links">
                <li className="navbar-list">
                    <a href="#menu" className="header-link">Menu</a>
                </li>
                <li className="navbar-list">
                    <a href="#reservations" className="header-link">Reservations</a>
                </li>
                <li className="navbar-list">
                    <a href="#order" className="header-link">Order</a>
                </li>
                <li className="navbar-list">
                    <a href="#address" className="header-link">Address</a>
                </li>
            </div>
        </nav>
    );
}