import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional

import Cart from "../data/Cart";
import ItemCart from "./ItemCart";

test("ItemCart component exists", () => {
  render(<ItemCart />);
  const element = screen.getByText(/invalid item/i);
  expect(element).toBeInTheDocument();
});

test("AddFn Button is Clickable", () => {
  const cart = [4];
  const addFn = jest.fn();
  const rmFn = jest.fn();
  const c = new Cart(cart);

  render(<ItemCart data={c.getItemData(cart[0])} addFn={addFn} rmFn={rmFn} />);
  fireEvent.click(screen.getByText(/\+/i));
  expect(rmFn).toHaveBeenCalledTimes(0);
  expect(addFn).toHaveBeenCalledTimes(1);
});

test("RmFn Button is Clickable", () => {
  const cart = [4];
  const addFn = jest.fn();
  const rmFn = jest.fn();
  const c = new Cart(cart);

  render(<ItemCart data={c.getItemData(cart[0])} addFn={addFn} rmFn={rmFn} />);
  fireEvent.click(screen.getByText(/\-/i));
  expect(addFn).toHaveBeenCalledTimes(0);
  expect(rmFn).toHaveBeenCalledTimes(1);
});
