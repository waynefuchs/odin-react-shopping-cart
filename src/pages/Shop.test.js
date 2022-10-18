import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional

import Shop from "./Shop";

test("Landing page exists", () => {
  render(<Shop />);
  const linkElement = screen.getByTestId('shop');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass('shop');
});
