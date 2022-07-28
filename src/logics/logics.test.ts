import { isRowBingo } from "./logics";

describe("isRowBingo()", () => {
  test("bingo", () => {
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
