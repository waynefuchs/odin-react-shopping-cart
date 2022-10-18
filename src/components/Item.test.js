import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import { MemoryRouter as Router } from "react-router-dom";
import uniqid from "uniqid";

import Item from "./Item";

test("Item component exists", () => {
  const data = {
    id: uniqid(),
    name: "Silk Road Camel",
    image: "image.jpeg",
    shortDescription: "A camel",
    price: "123.45",
  };

  render(<Item data={data} />);
  const element = screen.getByText(/Silk Road Camel/i);
  expect(element).toBeInTheDocument();
});
