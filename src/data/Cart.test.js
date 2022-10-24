import Cart from "./Cart";
import itemdata from "../item-data";

test("Cart exists", () => {
  const cart = new Cart();
  expect(cart.Count()).toBe(0);
  expect(cart.Price()).toBe(0);
});

test("Cart can contain an item", () => {
  const id = 1;
  const cart = new Cart([id]);
  expect(cart.Count()).toBe(1);
  expect(cart.Price()).toBe(itemdata[id].price);
});

test("Cart can contain multiples of the same item", () => {
  const id = 2;
  const cart = new Cart([id, id, id]);
  expect(cart.Count()).toBe(3);
  expect(cart.Price()).toBe(itemdata[id].price * 3);
});