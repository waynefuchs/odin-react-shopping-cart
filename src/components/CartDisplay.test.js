import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { BrowserRouter as Router } from "react-router-dom";

import CartDisplay from "./CartDisplay";

test("Item component exists", () => {
  render(<Router><CartDisplay /></Router>);
  const element = screen.getByText(/shopping_cart/);
  expect(element).toBeInTheDocument();
});

it("Reports proper shopping cart item quantity", () => {
  const cart = [1, 1, 1];
  render(<Router><CartDisplay cart={cart} /></Router>);
  const element = screen.getByText(/^3$/);
  expect(element).toBeInTheDocument();
})
