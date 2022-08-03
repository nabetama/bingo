import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { Blocks } from "../Blocks";

jest.mock("../logics/shuffle", () => {
  return {
    shuffle: jest.fn(),
    makeLabels: () => [
      ["1", "2", "3", "4", "5"],
      ["6", "7", "8", "9", "10"],
      ["11", "12", "13", "14", "15"],
      ["16", "17", "18", "19", "20"],
      ["21", "22", "23", "24", "25"],
    ],
  };
});

describe("<Blocks />", () => {
  test("shows Bingo panels", () => {
    const { getByText } = render(<Blocks />);
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("25")).toBeInTheDocument();
  });

  test("TOGGLE panel when clicked panel", () => {
    const { getByText } = render(<Blocks />);
    let panel13 = getByText("13");
    expect(panel13).toHaveClass("bg-indigo-50");

    fireEvent.click(getByText("13"));
    panel13 = getByText("13");
    expect(panel13).toHaveClass("bg-emerald-500");
  });

  test("CLEAR panel when clicked button which action CLEAR", () => {
    const { getByText } = render(<Blocks />);
    let resetBtn = getByText("リセットする");

    fireEvent.click(getByText("13"));
    fireEvent.click(getByText("20"));
    expect(getByText("13")).toHaveClass("bg-emerald-500");
    expect(getByText("20")).toHaveClass("bg-emerald-500");

    fireEvent.click(resetBtn);
    expect(getByText("13")).toHaveClass("bg-indigo-50");
    expect(getByText("20")).toHaveClass("bg-indigo-50");
  });

  test("snapshot", () => {
    const component = renderer.create(<Blocks />);
    expect(component).toMatchSnapshot();
  });
});
