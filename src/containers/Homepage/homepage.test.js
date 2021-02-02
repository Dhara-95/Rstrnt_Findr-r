import React from "react";
import renderer from "react-test-renderer";
import { Homepage } from "./index";

it("displays the homepage with the correct components", () => {
  const tree = renderer.create(<Homepage setUserInput={"function"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
