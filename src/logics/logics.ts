const isRowBingo = (row: { isOpen: boolean; label: string }[]): boolean => {
  return row.every((cell) => cell.isOpen === true);
};

const isColumnBingo = (
  columnBlocks: { isOpen: boolean; label: string }[][],
  columnIndex: number
): boolean => {
  const arr = columnBlocks.map((blocks) => blocks[columnIndex]);

  if (isRowBingo(arr)) {
    return true;
  }
  return false;
};

// TODO: No hard coding
const isCrossBingo = (
  state: { isOpen: boolean; label: string }[][]
): boolean => {
  const cross1 = [
    state[0][0],
    state[1][1],
    state[2][2],
    state[3][3],
    state[4][4],
  ];
  const cross2 = [
    state[0][4],
    state[1][3],
    state[2][2],
    state[3][1],
    state[4][0],
  ];

  return isRowBingo(cross1) || isRowBingo(cross2);
};

export { isRowBingo, isColumnBingo, isCrossBingo };
