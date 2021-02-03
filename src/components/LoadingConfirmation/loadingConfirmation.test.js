import React from "react";
import renderer from "react-test-renderer";
import { LoadingConfirmation } from "./index";

it("displays Loading...", () => {
  const tree = renderer.create(<LoadingConfirmation />).toJSON();
  expect(tree).toMatchSnapshot();
});
