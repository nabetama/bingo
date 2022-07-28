const isRowBingo = (row: { isOpen: boolean; label: string }[]) => {
  return row.every((cell) => cell.isOpen === true);
};

export { isRowBingo };
