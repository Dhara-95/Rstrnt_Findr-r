describe("Feature tests", () => {
  const homepageUrl = "http://localhost:3000";

  beforeEach(() => {
    const mockApiCall = browser.mock(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
      {
        method: "post",
        headers: {
          authorization:
            "Bearer S1Zn98krZ67DXy-C4ZByWC-hwfPsUu8El_amtr7CX5xjZJ07d-qrhawcvyOBzx1WwKzqK6bfEN7dNu1ynU2b8AcCN5nQGFtQvl0oHpH-g9Wlc2oyGi9jQMzeVtwOYHYx",
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
    const submitButton = $(".submit-button");
    submitButton.click();
    expect(browser).toHaveUrlContaining("/searchresults");
  });

  it("Has correct user input displayed on submit", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();
    const h2header = $("h2=Restaurants near W13 3RH");
    expect(h2header).toBeDisplayed();
  });
});
