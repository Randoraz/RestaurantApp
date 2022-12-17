import React from "react";
import './Dish.css';

export const Dish = ({display, dishName, description, img}) => {
    return (
        <div className={`dish ${display}`}>
            <figure className="dish-figure">
                <img className="dish-img" src={img} alt={dishName} />
            </figure>
            <div className="dish-text">
                <h3 className="dish-name">{dishName}</h3>
                <p className="dish-description">{description}</p>
            </div>
        </div>
    );
}