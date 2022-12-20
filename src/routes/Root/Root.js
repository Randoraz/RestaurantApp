import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../features/NavBar/NavBar";
import { Hero } from "../../features/Hero/Hero";

const Root = () => {
    return (
        <div className="root">
            <Hero />
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Root;