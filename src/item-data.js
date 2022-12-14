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

// Price must be stored in cents
// Otherwise floating point precision can be an issue
const createItemObject = (id, name, image, shortDescription, price) => {
  return { id, name, image, shortDescription, price };
};

const data = {
  1: createItemObject(1, "Silk Road Camel", camel, "Silk Road Camel", 12345),
  2: createItemObject(2, "Maine Lighthouse", lighthouse, "Maine Lighthouse", 23456),
  3: createItemObject(3, "Wooden Loon Carving", loon, "Wooden Loon Carving", 30050),
  4: createItemObject(4, "Swedish Man Carving", manCarving, "Swedish Man Carving", 22222),
  5: createItemObject(5, "Swedish Woman Carving", womanCarving, "Swedish Woman Carving", 22222),
  6: createItemObject(6, "Crystal Moose", mooseGlass, "Crystal Moose", 7345),
  7: createItemObject(7, "Oriental Chalice", orientalCup, "Oriental Chalice", 50000),
  8: createItemObject(8, "Silver Tea Cup", silverTeaCup, "Silver Tea Cup", 12550),
  9: createItemObject(9, "Train Plate", trainPlate, "Train Plate", 8080),
  10: createItemObject(10, "Windmill Plate", windmillPlate, "Windmill Plate", 8080),
};

export default data;
