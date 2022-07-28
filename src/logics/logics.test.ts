import { isRowBingo } from "./logics";

describe("isRowBingo()", () => {
  test("bingo", () => {
    const cell = { isOpen: true, label: "dummy" };
    const row = [...Array(5)].map(() => cell);

    expect(isRowBingo(row)).toBe(true);
  });

  test("not bingo", () => {
    const cell = { isOpen: false, label: "dummy" };
    const row = [...Array(5)].map(() => cell);

    expect(isRowBingo(row)).toBe(false);
  });
});
