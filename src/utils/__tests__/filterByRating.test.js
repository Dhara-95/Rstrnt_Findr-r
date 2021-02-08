import { filterByRating } from "../filterByRating";

describe("filterByRating", () => {
  test("Returns a sorted list by rating from highest to lowest", () => {
    const businesses = [{ rating: 1 }, { rating: 4 }, { rating: 2.5 }];
    const call = filterByRating(businesses);
    const expectation = [{ rating: 4 }, { rating: 2.5 }, { rating: 1 }];
    expect(call).toEqual(expectation);
  });
});
