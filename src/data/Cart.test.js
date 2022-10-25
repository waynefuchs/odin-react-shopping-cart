import Cart from "./Cart";
import itemdata from "../item-data";

test("Cart exists", () => {
  const cart = new Cart();
  expect(cart.Count()).toBe(0);
  expect(cart.Price()).toBe("$0.00");
});

test("Cart can contain an item", () => {
  const id = 1;
  const cart = new Cart([id]);
  expect(cart.Count()).toBe(1);
  expect(cart.Price()).toBe(`$${itemdata[id].price/100}`);
});

test("Cart can contain multiples of the same item", () => {
  const id = 2;
  const cart = new Cart([id, id, id]);
  expect(cart.Count()).toBe(3);
  expect(cart.Price()).toBe(`$${(itemdata[id].price * 3) / 100}`);
});

test("UniqueIDs returns only unique IDs", () => {
  const cart = new Cart([1, 2, 3, 3, 3, 3, 4, 4, 5]);
  expect(cart.UniqueIDs().length).toBe(5);
  expect(cart.UniqueIDs()).toEqual([1,2,3,4,5]);
});

test("Quantity returns correct quanitity for given id", () => {
  const cart = new Cart([1, 2, 3, 3, 3, 3, 4, 4, 5]);
  expect(cart.quantity(1)).toBe(1);
  expect(cart.quantity(2)).toBe(1);
  expect(cart.quantity(3)).toBe(4);
  expect(cart.quantity(4)).toBe(2);
  expect(cart.quantity(5)).toBe(1);
  expect(cart.quantity(6)).toBe(0);
})