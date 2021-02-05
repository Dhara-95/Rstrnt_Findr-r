import { checkInvalidImageURL } from "../checkInvalidImageURL";

describe("checkInvalidImageURL tests", () => {
  test("Returns url for place holder image when given this specific invalid url.", () => {
    const expectation =
      "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg";
    const invalidURL = "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg";
    const call = checkInvalidImageURL(invalidURL);
    expect(call).toEqual(expectation);
  });

  test("Returns passed in valid url", () => {
    const expectation =
      "https://s3-media1.fl.yelpcdn.com/bphoto/DJdYE-wD6xNjKav0GmbgKA/o.jpg";
    const call = checkInvalidImageURL(expectation);
    expect(call).toEqual(expectation);
  });
});
