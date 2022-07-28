const isRowBingo = (row: { isOpen: boolean; label: string }[]): boolean => {
  return row.every((cell) => cell.isOpen === true);
};

const isColumnBingo = (
  columnBlocks: { isOpen: boolean; label: string }[][],
  columnIndex: number
): boolean => {
  const arr = columnBlocks.map((blocks) => blocks[columnIndex]);

  console.error(arr);

  if (isRowBingo(arr)) {
    return true;
  }
  return false;
};

export { isRowBingo, isColumnBingo };
