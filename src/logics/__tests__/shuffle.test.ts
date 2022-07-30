import { makeLabels } from "../shuffle";

describe("shuffle", () => {
  const dummyData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
  ];

  test("should be shuffle array", () => {
    const labels25 = makeLabels(dummyData, 5, 5);
    expect(labels25.length).toBe(5);

    dummyData.push("26");
    const labels26 = makeLabels(dummyData, 5, 5);
    // console.table(labels26);
    expect(labels26.length).toBe(5);
  });
});
