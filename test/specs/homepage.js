describe("homepage", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:3000");
    expect(browser).toHaveTitle(
      "Rstrnt Findr-r"
    );
  });
});