import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav id="navbar">
            <NavLink to={""} id="restaurant-logo">Atatakai</NavLink>
            <ul id="navbar-links">
                <li className="navbar-list">
                    <NavLink to={"menu"} className="header-link">Menu</NavLink>
                </li>
                <li className="navbar-list">
                    <NavLink to={"reservations"} className="header-link">Reservations</NavLink>
                </li>
                <li className="navbar-list">
                    <NavLink to="order" className="header-link">Order</NavLink>
                </li>
                <li className="navbar-list">
                    <NavLink to={"address"} className="header-link">Address</NavLink>
                </li>
            </ul>
        </nav>
    );
}