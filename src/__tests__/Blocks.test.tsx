import React from "react";
import { render, screen } from "@testing-library/react";

import { Block } from "../Block";

test("renders block with argument value", () => {
  render(<Block label="dummy" />);
  const val = screen.getByText(/dummy/);
  expect(val).toBeInTheDocument();
});
