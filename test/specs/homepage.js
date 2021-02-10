describe("homepage", () => {
  const homepageUrl = "http://localhost:3000";

  it("Has all the expected elements rendered for the user", () => {
    browser.url(homepageUrl);

    const header = $("h1=Rstrnt Findr-r");
    const inputLabel = $("span=Find restaurants near you:");
    const inputField = $('[name="postcode"]');
    const submitButton = $('[value="Find"]');
    const findByCuisineTitle = $("h2=Find By Cuisine");
    const imageContainer = $(".image-container");

    expect(browser).toHaveTitle("Rstrnt Findr-r");
    expect(header).toBeDisplayed();
    expect(inputLabel).toBeDisplayed();
    expect(inputField).toBeDisplayed();
    expect(submitButton).toBeDisplayed();
    expect(findByCuisineTitle).toBeDisplayed();
    expect(imageContainer).toHaveChildren(4);
  });
});
