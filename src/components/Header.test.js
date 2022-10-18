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