import React, { useEffect } from "react";
import './MenuCategory.css';

export const MenuCategory = ({name, dishes}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show-menu-category');
                } else {
                    entry.target.classList.remove('show-menu-category');
                };
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-menu-category');
        hiddenElements.forEach(el => observer.observe(el));

    }, []);

    return (
        <div className="menu-category hidden-menu-category">
            <h3 className="menu-category-name">{name}</h3>
            <div className="menu-dishes-div">
                {dishes.length > 0 && dishes.map((dish, index) => {
                    return (
                        <div className="menu-dish-div" key={`dish${index}`}>
                            <img className="menu-dish-img" src={dish.imgIcon} alt='' />
                            <h4 className="menu-dish-name">{dish.name}</h4>
                        </div>
                    );
                })};
            </div>
            
        </div>
    );
}