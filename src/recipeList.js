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

import ramenIcon from './images/edited/ramen-icon.jpg';
import katsuIcon from './images/edited/katsu-icon.jpg';
import sobaIcon from './images/edited/soba-icon.jpg';
import sushiIcon from './images/edited/sushi-icon.jpg';
import udonIcon from './images/edited/udon-icon.jpg';
import sushiComboIcon from './images/edited/sushi-combo-icon.jpg';
import takoyakiIcon from './images/edited/takoyaki-icon.jpg';
import gyozaIcon from './images/edited/gyoza-icon.jpg';
import tayakiIcon from './images/edited/tayaki-icon.jpg';
import riceIcon from './images/edited/rice-icon.jpg';

const ramenDish = {
    name: 'Ramen',
    description: 'Delicious ramen with a rich soup',
    img: ramen,
    imgIcon: ramenIcon,
    category: 'Noodles'
}

const katsuDish = {
    name: 'Chicken Katsu Curry',
    description: 'Curry and rice with an extra juicy chicken katsu',
    img: katsu,
    imgIcon: katsuIcon,
    category: 'Bowls'
}

const sobaDish = {
    name: 'Soba',
    description: 'Soba noodles served hot or cold',
    img: soba,
    imgIcon: sobaIcon,
    category: 'Noodles'
}

const sushiDish = {
    name: 'Sushi',
    description: 'Diverse kinds of niguiri sushi for you to find your favorite',
    img: sushi,
    imgIcon: sushiIcon,
    category: 'Sushi'
}

const udonDish = {
    name: 'Udon',
    description: 'Warm udon noodles with a soup which tastes like home',
    img: udon,
    imgIcon: udonIcon,
    category: 'Noodles'
}

const sushiComboDish = {
    name: 'Sushi Combo',
    description: 'Special kinds of sushi that show that great flavor can go together with health',
    img: sushiCombo,
    imgIcon: sushiComboIcon,
    category: 'Sushi'
}

const takoyakiDish = {
    name: 'Takoyaki',
    description: 'Fried dumplings stuffed with delicious octopus and complemented with Japanese mayonese and teriyaki sauce',
    img: takoyaki,
    imgIcon: takoyakiIcon,
    category: 'Snacks'
}

const gyozaDish = {
    name: 'Gyoza',
    description: 'Dumplings, fried or cooked in steam, filled with a delicious mix of pig meat and vegetables',
    img: gyoza,
    imgIcon: gyozaIcon,
    category: 'Snacks'
}

const tayakiDish = {
    name: 'Tayaki',
    description: 'Japanese fish-shaped cake filled with sweet red bean paste',
    img: tayaki,
    imgIcon: tayakiIcon,
    category: 'Desserts'
}

const riceDish = {
    name: 'Rice',
    description: 'A warm bowl of rice to complement your meal',
    img: rice,
    imgIcon: riceIcon,
    category: 'Complements'
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