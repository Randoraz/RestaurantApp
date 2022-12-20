import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav id="navbar">
            <Link to={"home"} id="restaurant-logo">Atatakai</Link>
            <div id="navbar-links">
                <li className="navbar-list">
                    <Link to={"menu"} className="header-link">Menu</Link>
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