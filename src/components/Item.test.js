import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";

import Item from "./Item";

test("Item component exists", () => {
  render(
    <Item
      name="Silk Road Camel"
      image="image.jpeg"
      shortDescription="A camel"
      price="123.45"
    />
  );
  const element = screen.getByText(/Silk Road Camel/i);
  expect(element).toBeInTheDocument();
});
