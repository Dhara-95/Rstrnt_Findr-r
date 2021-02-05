import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { createIconList } from "../utils/createIconList";

describe("createIconList", () => {
  test("Returns star rating array for whole number", () => {
    const call = createIconList(2);
    const expectation = [faStar, faStar];
    expect(call).toEqual(expectation);
  });

  test("Returns star rating array for half numbers", () => {
    const call = createIconList(1.5);
    const expectation = [faStar, faStarHalf];
    expect(call).toEqual(expectation);
  });
});
