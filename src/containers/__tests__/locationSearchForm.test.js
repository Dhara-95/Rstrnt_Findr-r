import React from "react";
import renderer from "react-test-renderer";

import { LocationSearchForm } from "../LocationSearchForm";

it("displays the Search Form with the correct components", () => {
  const tree = renderer
    .create(<LocationSearchForm setUserInput={"function"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});