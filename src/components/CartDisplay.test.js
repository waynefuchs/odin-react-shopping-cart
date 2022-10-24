import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import CartDisplay from "./CartDisplay";

test("Item component exists", () => {
  render(<CartDisplay />);
  const element = screen.getByText(/shopping_cart/);
  expect(element).toBeInTheDocument();
});
