import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../store/recipesSlice";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../features/NavBar/NavBar";
import { Hero } from "../../features/Hero/Hero";
import Footer from "../../features/Footer/footer";
import dishes from "../../recipeList";

const Root = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRecipes(dishes));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="root">
            <Hero />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root;