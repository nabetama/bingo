import React from "react";
import { render, screen } from "@testing-library/react";

import { Block } from "../Block";

describe("<Block />", () => {
  test("renders block with argument value", () => {
    render(<Block label="dummy" isOpen={false} toggleIsOpen={jest.fn()} />);
    const val = screen.getByText(/dummy/);
    expect(val).toBeInTheDocument();
  });

  test("snapshot", () => {});
});
