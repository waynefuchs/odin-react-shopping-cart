import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import LandingPage from "./LandingPage";

function renderWithProviders(el) {
  return render(<Router>{el}</Router>);
}

test("Landing page exists", () => {
  renderWithProviders(<LandingPage />);
  const linkElement = screen.getByText(/your search begins/i);
  expect(linkElement).toBeInTheDocument();
});

it("should have a link in a modal to the store.", () => {
  renderWithProviders(<LandingPage />);
  const linkElement = screen.getAllByRole("link", { name: "Here" });
  expect(linkElement.length).toBe(1);
  expect(linkElement.at(0)).toHaveAttribute("href", "/shop");
});