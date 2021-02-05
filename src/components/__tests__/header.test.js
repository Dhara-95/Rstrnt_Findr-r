import React from "react";
import renderer from "react-test-renderer";

import { Header } from "../Header";

it("displays the Header correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
