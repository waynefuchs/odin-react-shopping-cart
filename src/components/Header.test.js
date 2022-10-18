import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import Header from "./Header";

function renderWithProviders(el) {
  return render(<Router>{el}</Router>);
}

test("header exists", () => {
  renderWithProviders(<Header />);
  const element = screen.getByText(/grantiques/i);
  expect(element).toBeInTheDocument();
});

it("has a link to about page", () => {
  renderWithProviders(<Header />);
  const linkElement = screen.getAllByRole("link", { name: "About" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/about");
});

it("has a link to the shopping page", () => {
  renderWithProviders(<Header />);
  const linkElement = screen.getAllByRole("link", { name: "Shop" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/shop");
});

it("shows a shopping cart icon", () => {
  renderWithProviders(<Header />);
  const shoppingCartIcon = screen.getByText(/shopping_cart/);
  expect(shoppingCartIcon).toBeInTheDocument();
});
