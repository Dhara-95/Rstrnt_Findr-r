import { formatAddress } from "../formatAddress";

describe("formatAddress", () => {
  test("replaces an escape sequence with English grammar", () => {
    const address = "55 Manor Road\nLondon W13 0LJ\nUnited Kingdom";
    const call = formatAddress(address);
    const expectation = "55 Manor Road, London W13 0LJ, United Kingdom";
    expect(call).toEqual(expectation);
  });

  test("no changes made if there is no escape sequence", () => {
    const address = "55 Manor Road, London W13 0LJ, United Kingdom";
    const call = formatAddress(address);
    expect(call).toEqual(address);
  });
});
