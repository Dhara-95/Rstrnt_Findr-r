import React from "react";
import renderer from "react-test-renderer";

import { LoadingConfirmation } from "../LoadingConfirmation";

it("displays Loading...", () => {
  const tree = renderer.create(<LoadingConfirmation />).toJSON();
  expect(tree).toMatchSnapshot();
});
