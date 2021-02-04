import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { createIconArray } from "../utils/createIconArray";

describe("createIconArray", () => {
  test("Returns star rating array for whole number", () => {
    const wholeNumberArray = [faStar, faStar];
    expect(createIconArray(2)).toEqual(
      expect.arrayContaining(wholeNumberArray)
    );
  });

  test("Returns star rating array for half numbers", () => {
    const halfNumberArray = [faStar, faStarHalf];
    expect(createIconArray(1.5)).toEqual(
      expect.arrayContaining(halfNumberArray)
    );
  });
});
