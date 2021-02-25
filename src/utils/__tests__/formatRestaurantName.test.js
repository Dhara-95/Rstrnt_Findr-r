import { formatRestaurantName } from "../formatRestaurantName";

describe("formatRestaurantName", () => {
  test("Returns a formatted string of restaurant name ", () => {
    const call = formatRestaurantName("Apsley Chinese");
    const expectation = "Apsley-Chinese";
    expect(call).toEqual(expectation);
  });
});
