import { checkValidPriceRating } from "../utils/checkValidPriceRating";

describe("checkValidPriceRating tests", () => {
  test("Returns price rating if available", () => {
    const validPrice = "££";
    expect(checkValidPriceRating(validPrice)).toEqual(validPrice);
  });

  test("Returns Price rating not available", () => {
    expect(checkValidPriceRating(null)).toEqual("No price rating available");
  });
});
