import React from "react";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipesSlice";
import { MenuCategory } from "../../features/MenuCategory/MenuCategory";
import './MenuPage.css';

const MenuPage = () => {
    const recipes = useSelector(selectRecipes);

    const noodles = recipes.filter(recipe => {
        return recipe.category === 'Noodles';
    });

    const sushi = recipes.filter(recipe => {
        return recipe.category === 'Sushi';
    });

    const bowls = recipes.filter(recipe => {
        return recipe.category === 'Bowls';
    });

    const desserts = recipes.filter(recipe => {
        return recipe.category === 'Desserts';
    });

    const snacks = recipes.filter(recipe => {
        return recipe.category === 'Snacks';
    });

    const complements = recipes.filter(recipe => {
        return recipe.category === 'Complements';
    });

    return (
        <div id="menu-page">
            <h2 className="menu-title">Menu</h2>
            <MenuCategory name="Noodles" dishes={noodles} />
            <MenuCategory name="Sushi" dishes={sushi} />
            <MenuCategory name="Bowls" dishes={bowls} />
            <MenuCategory name="Snacks" dishes={snacks} />
            <MenuCategory name="Complements" dishes={complements} />
            <MenuCategory name="Desserts" dishes={desserts} />
        </div>
    );
}

export default MenuPage;