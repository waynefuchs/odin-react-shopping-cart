import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import About from "./About";

test("Footer component exists", () => {
  render(<About />);
  const element = screen.getByText(/About Us/);
  expect(element).toBeInTheDocument();
});
