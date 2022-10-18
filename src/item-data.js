import uniqid from "uniqid";

import camel from "./img/items/camel.png";
import lighthouse from "./img/items/lighthouse.png";
import loon from "./img/items/loon.png";
import manCarving from "./img/items/man-carving.png";
import mooseGlass from "./img/items/moose-glass.png";
import orientalCup from "./img/items/oriental-cup.png";
import silverTeaCup from "./img/items/silver-tea-cup.png";
import trainPlate from "./img/items/train-plate.png";
import windmillPlate from "./img/items/windmill-plate.png";
import womanCarving from "./img/items/woman-carving.png";

const createItemObject = (id, name, image, shortDescription, price) => {
  return { id, name, image, shortDescription, price };
};

const data = [
  createItemObject(1, "Silk Road Camel", camel, "Silk Road Camel", 123.45),
  createItemObject(2, "Maine Lighthouse", lighthouse, "Maine Lighthouse", 234.56),
  createItemObject(3, "Wooden Loon Carving", loon, "Wooden Loon Carving", 300.50),
  createItemObject(4, "Swedish Man Carving", manCarving, "Swedish Man Carving", 222.22),
  createItemObject(5, "Swedish Woman Carving", womanCarving, "Swedish Woman Carving", 222.22),
  createItemObject(6, "Crystal Moose", mooseGlass, "Crystal Moose", 73.45),
  createItemObject(7, "Oriental Chalice", orientalCup, "Oriental Chalice", 500.00),
  createItemObject(8, "Silver Tea Cup", silverTeaCup, "Silver Tea Cup", 125.50),
  createItemObject(9, "Train Plate", trainPlate, "Train Plate", 80.80),
  createItemObject(10, "Windmill Plate", windmillPlate, "Windmill Plate", 80.80),
];

export default data;
