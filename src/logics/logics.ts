const isRowBingo = (row: { isOpen: boolean; label: string }[]): boolean => {
  return row.every((cell) => cell.isOpen === true);
};

const isColumnBingo = (
  state: { isOpen: boolean; label: string }[][]
): boolean => {
  let ret = false;

  state.forEach((blocks) => {
    blocks.forEach((block, i) => {
      if (block.isOpen === true) {
        // if already bingo, don't calculate
        ret = ret ? true : isRowBingo(state.map((blocks) => blocks[i]));
      }
    });
  });
  return ret;
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

const isBingo = (state: { isOpen: boolean; label: string }[][]): boolean => {
  return state.some(isRowBingo) || isColumnBingo(state) || isCrossBingo(state);
};

export { isRowBingo, isColumnBingo, isCrossBingo, isBingo };
