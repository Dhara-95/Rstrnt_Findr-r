import { business } from "../../__mocks__/dataMock";

describe("Feature tests", () => {
  const homepageUrl = "http://localhost:3000";
  const elementXPathBase = "//*[@id='root']/div/div/div";
  const restaurantName = "h2.restaurant-name";
  const restaurantTag = "div.restaurant-tag";
  const restaurantPrice = "h2.restaurant-price";
  const restaurantRating = "div.restaurant-rating";
  const restaurantAddress = "span.restaurant-address";

  beforeEach(() => {
    const mockApiCall = browser.mock(
      "https://rstrnt-cors.herokuapp.com/https://api.yelp.com/v3/graphql",
      {
        method: "post",
      }
    );
    mockApiCall.respond(business, {
      statusCode: 200,
      fetchResponse: false,
    });
  });

  it("Redirects the user to /searchresults page on button submit", () => {
    browser.url(homepageUrl);
    const submitButton = $(".submit-button");
    submitButton.click();
    expect(browser).toHaveUrlContaining("/searchresults");
  });

  it("Has the correct main page information", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    const title = $("h1=Rstrnt Findr-r");
    const header = $("h2=Restaurants near W13 3RH");
    const orderByFilter = $(".list-options");

    expect(title).toBeDisplayed();
    expect(header).toBeDisplayed();
    expect(orderByFilter).toBeDisplayed();
  });

  it("Has the correct mocked data displayed", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    $(`${elementXPathBase}[4]`).waitForExist();
    const restaurantCard = $(`${elementXPathBase}[4]`);

    const name = restaurantCard.$(restaurantName);
    const tag = restaurantCard.$(restaurantTag);
    const price = restaurantCard.$(restaurantPrice);
    const rating = restaurantCard.$(restaurantRating);
    const address = restaurantCard.$(restaurantAddress);

    expect(name).toHaveText("Chic O Land");
    expect(tag).toHaveText("Fast Food");
    expect(price).toHaveText("£");
    expect(rating).toHaveChildren(2);
    expect(address).toHaveText(
      "50 Drayton Green Road, London W13 8RY, United Kingdom"
    );
  });

  it("Has mocked data ordered as expected", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    $(`${elementXPathBase}[4]`).waitForExist();
    const restaurantCard1 = $(`${elementXPathBase}[2]`);
    const restaurantCard2 = $(`${elementXPathBase}[3]`);
    const restaurantCard3 = $(`${elementXPathBase}[4]`);

    const name1 = restaurantCard1.$(restaurantName);
    const name2 = restaurantCard2.$(restaurantName);
    const name3 = restaurantCard3.$(restaurantName);

    expect(name1).toHaveText("A 2 Zee's");
    expect(name2).toHaveText("Tophill Caribean");
    expect(name3).toHaveText("Chic O Land");
  });

  it("Changes the order of the mocked data as expected", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();
    const selectBox = $("#filter");

    $(`${elementXPathBase}[2]`).waitForExist();
    const defaultFirstRestaurantCard = $(`${elementXPathBase}[2]`);
    const defaultFirstName = defaultFirstRestaurantCard.$(restaurantName);

    expect(defaultFirstName).toHaveText("A 2 Zee's");

    selectBox.selectByAttribute("value", "rating");
    const highestRated = $(`${elementXPathBase}[2]`);
    const highestRatedName = highestRated.$(restaurantName);

    expect(highestRatedName).toHaveText("Hilltop Roti");

    //confirm that we can go back to default order

    selectBox.selectByAttribute("value", "nearest");
    const nearestRestaurantCard = $(`${elementXPathBase}[2]`);
    const nearestName = nearestRestaurantCard.$(restaurantName);

    expect(nearestName).toHaveText("A 2 Zee's");
  });
});
