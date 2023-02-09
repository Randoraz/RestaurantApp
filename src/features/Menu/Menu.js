import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipesSlice";
import './Menu.css';

import { Dish } from "../Dish/Dish";

export const Menu = () => {
    const [current, setCurrent] = useState(0);
    const [currentTimeOut, setCurrentTimeOut] = useState();

    const recipes = useSelector(selectRecipes);

    useEffect(() => {
        if(currentTimeOut)
            clearTimeout(currentTimeOut);

        const myTimeOut = setTimeout(() => {
            if(current + 1 >= recipes.length) 
                setCurrent(0);
            else
                setCurrent(current + 1);
        }, 5000);

        setCurrentTimeOut(myTimeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, recipes]);

    return (
        <section id="menu">
            {recipes.map((dish, index) => {
                if(index === current)
                    return <Dish display='show' dishName={dish.name} description={dish.description} img={dish.img} key={`dish${index}`} />
                else
                    return <Dish display='hide' dishName={dish.name} description={dish.description} img={dish.img} key={`dish${index}`} />
            })}
            <div className="carosel-dots">
            {recipes.map((dish, index) => {
                if(index === current)
                    return <button className="carosel-dot selected" onClick={() => {setCurrent(index);}} key={`caroselDot${index}`}></button>
                else
                    return <button className="carosel-dot" onClick={() => {setCurrent(index);}} key={`caroselDot${index}`}></button>
            })}
            </div>
        </section>
    )
}