import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import Footer from "./Footer";

test("Footer component exists", () => {
  render(<Footer />);
  const element = screen.getByText(/doesn't really exist/);
  expect(element).toBeInTheDocument();
});
