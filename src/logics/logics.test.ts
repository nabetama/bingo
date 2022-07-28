import { isColumnBingo, isRowBingo, isCrossBingo } from "./logics";

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
  test("is Bingo", () => {
    const state = [
      [
        { isOpen: true, label: "1-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "2-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "3-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
    ];

    expect(isColumnBingo(state)).toBe(true);
  });

  test("is Bingo 2", () => {
    const state = [
      [
        { isOpen: true, label: "1-1" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "2-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "3-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
    ];

    expect(isColumnBingo(state)).toBe(true);
  });

  test("is NOT Bingo", () => {
    const state = [
      [
        { isOpen: false, label: "1-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "2-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "3-1" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
    ];

    expect(isColumnBingo(state)).toBe(false);
  });

  test.only("already Bingo ", () => {
    const state = [
      [
        { isOpen: false, label: "1-1" },
        { isOpen: true, label: "1-2" },
        { isOpen: false, label: "1-3" },
      ],
      [
        { isOpen: false, label: "2-1" },
        { isOpen: true, label: "2-2" },
        { isOpen: false, label: "2-3" },
      ],
      [
        { isOpen: false, label: "3-1" },
        { isOpen: true, label: "3-2" },
        { isOpen: true, label: "3-3" },
      ],
    ];

    expect(isColumnBingo(state)).toBe(true);
  });
});

describe("isCrossBingo()", () => {
  test("bingo 1", () => {
    const bingoState1 = [
      [
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
      ],
    ];
    expect(isCrossBingo(bingoState1)).toBe(true);
  });

  test("bingo 2", () => {
    const bingoState1 = [
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
    ];
    expect(isCrossBingo(bingoState1)).toBe(true);
  });

  test("not bingo ", () => {
    const bingoState1 = [
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: true, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
      [
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
        { isOpen: false, label: "dummy" },
      ],
    ];
    expect(isCrossBingo(bingoState1)).toBe(false);
  });
});
