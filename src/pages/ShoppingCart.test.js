import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional

import ShoppingCart from "./ShoppingCart";

test("ShoppingCart component exists", () => {
  render(<ShoppingCart cart={[]} />);
  const element = screen.getByText(/Shopping Cart is Empty!/i);
  expect(element).toBeInTheDocument();
});