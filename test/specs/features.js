describe("Feature tests", () => {
  const homepageUrl = "http://localhost:3000";

  beforeEach(() => {
    const mockApiCall = browser.mock(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
      {
        method: "post",
        headers: {
          authorization:
            "Bearer 2jXanN0JhNlrpYgMFcYjR7XU0jcaqXoPBLwWpETv4zyeMaummrCydWM40bTSc0D-dZhV-mMC3t9PuwjY8f63YbqZlRkOauXqP31xf0ft7JEsERye055c5NdExdsOYHYx",
          "Accept-Language": "en-US",
        },
      }
    );
    mockApiCall.respond({
      statusCode: 200,
      fetchResponse: false,
    });
  });

  it("Has the correct url on postcode submit", () => {
    browser.url(homepageUrl);
    // const input = $('[name="postcode"]');
    // input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();
    expect(browser).toHaveUrlContaining("/searchresults");
  });
});
