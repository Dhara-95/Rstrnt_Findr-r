import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import { RestaurantDetail } from "../RestaurantDetail";
import { businesses } from "../../mocks/dataMock";

it("displays the details of a single restaurant correctly", async () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RestaurantDetail restaurant={businesses[0]} postcode={"W13 3RH"} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
