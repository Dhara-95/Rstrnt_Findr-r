import React from "react";
import renderer from "react-test-renderer";
import { SubmitButton } from "./index";

it("displays the button with the correct props", () => {
  const tree = renderer.create(<SubmitButton label={"Find"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
