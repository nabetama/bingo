/**
 * shuffle returns shuffled array
 * @param {T[]} arr - array to shuffle
 * @returns {T[]} - shuffled array
 */
const shuffle = <T>(arr: T[]): T[] => {
  let a = [...arr];

  // use Fisher-Yates algorythm
  // https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB
  for (let i = a.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;
  }

  return a;
};

const makeLabels = <T>(data: T[], row: number, column: number) => {
  const arr = shuffle(data);
  let newArr = [];

  for (let i = 0; i < row; i++) {
    newArr.push(arr.splice(0, column));
  }

  return newArr;
};

export { makeLabels };
