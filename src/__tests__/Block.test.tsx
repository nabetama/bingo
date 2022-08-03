import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Block } from "../Block";

describe("<Block />", () => {
  test("renders block with argument value", () => {
    const spyToggleIsOpen = jest.fn();
    const { getByText } = render(
      <Block label="dummy" isOpen={false} toggleIsOpen={spyToggleIsOpen} />
    );

    expect(getByText(/dummy/)).toBeInTheDocument();
    expect(getByText(/dummy/)).toHaveClass("bg-indigo-50");
  });

  test("publication action when clicked component", () => {
    const spyToggleIsOpen = jest.fn();
    const { getByText } = render(
      <Block label="dummy" isOpen={false} toggleIsOpen={spyToggleIsOpen} />
    );

    fireEvent.click(getByText(/dummy/));
    expect(spyToggleIsOpen).toBeCalledWith({ type: "TOGGLE", label: "dummy" });
  });

  test("background color has changed when Block called with `isOpen`", () => {
    const spyToggleIsOpen = jest.fn();
    const { getByText } = render(
      <Block label="dummy" isOpen={true} toggleIsOpen={spyToggleIsOpen} />
    );

    expect(getByText(/dummy/)).toHaveClass("bg-emerald-500");
  });

  test("snapshot", () => {
    const component = renderer.create(
      <Block label="dummy" isOpen={false} toggleIsOpen={jest.fn()} />
    );

    expect(component).toMatchSnapshot();
  });
});
