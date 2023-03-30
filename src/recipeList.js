import ramen from './images/edited/ramen-full.webp';
import katsu from './images/edited/katsu-full.webp';
import soba from './images/edited/soba-full.webp';
import sushi from './images/edited/sushi-full.webp';
import udon from './images/edited/udon-full.webp';
import sushiCombo from './images/edited/sushi-combo-full.webp';
import takoyaki from './images/edited/takoyaki-full.webp';
import gyoza from './images/edited/gyoza-full.webp';
import tayaki from './images/edited/tayaki-full.webp';
import rice from './images/edited/rice-full.webp';

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