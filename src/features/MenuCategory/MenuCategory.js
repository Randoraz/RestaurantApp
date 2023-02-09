import React from "react";
import './MenuCategory.css';

export const MenuCategory = ({name, dishes}) => {
    return (
        <div className="menu-category">
            <h3 className="menu-category-name">{name}</h3>
            <div className="menu-dishes-div">
                {dishes.length > 0 && dishes.map((dish, index) => {
                    return (
                        <div className="menu-dish-div">
                            <img className="menu-dish-img" src={dish.img} alt='' />
                            <h4 className="menu-dish-name" key={`dish${index}`}>{dish.name}</h4>
                        </div>
                    );
                })};
            </div>
            
        </div>
    );
}