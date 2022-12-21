import ramen from './images/susann-schuster-5x8dUGe-7Fo-unsplash.jpg';
import katsu from './images/stefen-tan-_sfMD-OhFR8-unsplash.jpg';
import soba from './images/masaaki-komori-2miSJ1zka1M-unsplash.jpg';
import sushi from './images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg';
import udon from './images/jinomono-media-5DsTEP06774-unsplash.jpg';
import sushiCombo from './images/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg';
import takoyaki from './images/drica-pinotti-wbFtlJIYPNk-unsplash.jpg';
import gyoza from './images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg';
import tayaki from './images/kelly-visel-MIMgqOQLnOc-unsplash.jpg';
import rice from './images/mgg-vitchakorn-zXNC_lBBVGE-unsplash.jpg';

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

const sushiDish = {
    name: 'Sushi',
    description: 'Diverse kinds of niguiri sushi for you to find your favorite',
    img: sushi
}

const udonDish = {
    name: 'Udon',
    description: 'Warm udon noodles with a soup which tastes like home',
    img: udon
}

const sushiComboDish = {
    name: 'Sushi Combo',
    description: 'Special kinds of sushi that show that great flavor can go together with health',
    img: sushiCombo
}

const takoyakiDish = {
    name: 'Takoyaki',
    description: 'Fried dumplings stuffed with delicious octopus and complemented with Japanese mayonese and teriyaki sauce',
    img: takoyaki
}

const gyozaDish = {
    name: 'Gyoza',
    description: 'Dumplings, fried or cooked in steam, filled with a delicious mix of pig meat and vegetables',
    img: gyoza
}

const tayakiDish = {
    name: 'Tayaki',
    description: 'Japanese fish-shaped cake filled with sweet red bean paste',
    img: tayaki
}

const riceDish = {
    name: 'Rice',
    description: 'A warm bowl of rice to complement your meal',
    img: rice
}

const dishes = [];
    dishes.push(ramenDish);
    dishes.push(katsuDish);
    dishes.push(sobaDish);
    dishes.push(sushiDish);
    dishes.push(udonDish);
    dishes.push(sushiComboDish);
    dishes.push(takoyakiDish);
    dishes.push(gyozaDish);
    dishes.push(tayakiDish);
    dishes.push(riceDish);

export default dishes;