import React from "react";
import renderer from "react-test-renderer";

import { RestaurantLocationMap } from "../RestaurantLocationMap";

it("displays a map with restaurant location", () => {
  const tree = renderer
    .create(
      <RestaurantLocationMap
        coordinates={{ latitude: 51.7375787, longitude: -0.4688423 }}
        name={"Apsley Chinese"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
