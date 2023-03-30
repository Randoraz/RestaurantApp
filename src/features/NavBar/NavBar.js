import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav id="navbar">
            <Link to={""} id="restaurant-logo">Atatakai</Link>
            <ul id="navbar-links">
                <li className="navbar-list">
                    <Link to={"menu"} className="header-link">Menu</Link>
                </li>
                <li className="navbar-list">
                    <Link to={"reservations"} className="header-link">Reservations</Link>
                </li>
                <li className="navbar-list">
                    <Link to="order" className="header-link">Order</Link>
                </li>
                <li className="navbar-list">
                    <Link to={"address"} className="header-link">Address</Link>
                </li>
            </ul>
        </nav>
    );
}