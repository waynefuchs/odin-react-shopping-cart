import React from "react";
import { fireEvent, getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
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

test("Adding an item to the cart works", () => {
  const data = {
    id: uniqid(),
    name: "Silk Road Camel",
    image: "image.jpeg",
    shortDescription: "A camel",
    price: "123.45",
  };

  const handleClick = jest.fn();
  render(<Item data={data} addFn={handleClick} />);
  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
})