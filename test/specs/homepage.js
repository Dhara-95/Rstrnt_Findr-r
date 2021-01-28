describe("homepage", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:3000");
    expect(browser).toHaveTitle("Rstrnt Findr-r");
  });

  it("Should have the correct page header", () => {
    browser.url("http://localhost:3000");
    const header = $("h1=Rstrnt Findr-r");
    expect(header).toBeDisplayed();
  });

  it("Has an input field for user address/postcode", () => {
    browser.url("http://localhost:3000");
    const inputField = $('[name="address"]');
    expect(inputField).toExist();
  });
});
