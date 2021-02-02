import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { App } from "./index";

it("displays the App correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <App />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
