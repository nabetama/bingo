import exp from "constants";
import { isColumnBingo, isRowBingo } from "./logics";

describe("isRowBingo()", () => {
  test("is Bingo", () => {
    const cell = { isOpen: true, label: "dummy" };
    const row = [...Array(5)].map(() => cell);

    expect(isRowBingo(row)).toBe(true);
  });

  test("not bingo when all cells are not open", () => {
    const cell = { isOpen: false, label: "dummy" };
    const row = [...Array(5)].map(() => cell);

    expect(isRowBingo(row)).toBe(false);
  });

  test("not bingo when some cell is not open", () => {
    const row = [
      { isOpen: false, label: "dummy" },
      { isOpen: true, label: "dummy" },
      { isOpen: false, label: "dummy" },
      { isOpen: true, label: "dummy" },
      { isOpen: false, label: "dummy" },
    ];

    expect(isRowBingo(row)).toBe(false);
  });
});

describe("isColumnBingo", () => {
  const state = [
    [
      { isOpen: true, label: "1-1" },
      { isOpen: false, label: "dummy" },
      { isOpen: false, label: "dummy" },
    ],
    [
      { isOpen: true, label: "2-1" },
      { isOpen: true, label: "dummy" },
      { isOpen: false, label: "dummy" },
    ],
    [
      { isOpen: true, label: "3-1" },
      { isOpen: true, label: "dummy" },
      { isOpen: false, label: "dummy" },
    ],
  ];

  test("is Bingo", () => {
    expect(isColumnBingo(state, 0)).toBe(true);
  });

  test("is not bingo when all cells are not open", () => {
    expect(isColumnBingo(state, 2)).toBe(false);
  });

  test("not bingo when some cell is not open", () => {
    expect(isColumnBingo(state, 1)).toBe(false);
  });
});
