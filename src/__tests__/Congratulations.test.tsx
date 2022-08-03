import React from "react";

import renderer from "react-test-renderer";
import { Congratulations } from "../Congratulations";

describe("<Congratulations />", () => {
  test("is not BINGO", () => {
    const component = renderer.create(<Congratulations isBingo={false} />);
    expect(component).toMatchSnapshot();
  });

  test("is BINGO", () => {
    const component = renderer.create(<Congratulations isBingo={true} />);
    expect(component).toMatchSnapshot();
  });
});
