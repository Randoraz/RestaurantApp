import React, {useState, useEffect} from "react";
import './Menu.css';

import { Dish } from "../Dish/Dish";

import ramen from '../../images/susann-schuster-5x8dUGe-7Fo-unsplash.jpg';
import katsu from '../../images/stefen-tan-_sfMD-OhFR8-unsplash.jpg';
import soba from '../../images/masaaki-komori-2miSJ1zka1M-unsplash.jpg';
import sushi from '../../images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg';
import udon from '../../images/jinomono-media-5DsTEP06774-unsplash.jpg';
import sushiCombo from '../../images/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg';
import takoyaki from '../../images/drica-pinotti-wbFtlJIYPNk-unsplash.jpg';
import gyoza from '../../images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg';
import tayaki from '../../images/kelly-visel-MIMgqOQLnOc-unsplash.jpg';
import rice from '../../images/mgg-vitchakorn-zXNC_lBBVGE-unsplash.jpg';

export const Menu = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if(current + 1 >= dishes.length)
                setCurrent(0);
            else
                setCurrent(current + 1);
        }, 5000);
    }, [current]);


    const ramenDish = {
        name: 'Ramen',
        description: 'Delicious ramen with a rich soup',
        img: ramen
    }

    const katsuDish = {
        name: 'Chicken Katsu Curry',
        description: 'Curry and rice with an extra juicy chicken katsu',
        img: katsu
    }

    const sobaDish = {
        name: 'Soba',
        description: 'Soba noodles served hot or cold',
        img: soba
    }

    const dishes = [];
    dishes.push(ramenDish);
    dishes.push(katsuDish);
    dishes.push(sobaDish);

    return (
        <section id="menu">
            {dishes.map((dish, index) => {
                if(index === current)
                    return <Dish display='show' dishName={dish.name} description={dish.description} img={dish.img} key={`dish${index}`} />
                else
                    return <Dish display='hide' dishName={dish.name} description={dish.description} img={dish.img} key={`dish${index}`} />
            })}
        </section>
    )
}