import React from "react";
import renderer from "react-test-renderer";

import { SubmitButton } from "../SubmitButton";

it("displays the button with the correct props", () => {
  const tree = renderer
    .create(<SubmitButton label={"Find"} handleFetch={"function"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
