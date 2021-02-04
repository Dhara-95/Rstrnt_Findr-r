import { formatAddress } from "../utils/formatAddress";

describe("checkFormattedAddress", () => {
  test("Returns the correct formatted address", () => {
    const address = "55 Manor Road\nLondon W13 0LJ\nUnited Kingdom";
    const correctAddress = "55 Manor Road, London W13 0LJ, United Kingdom";
    expect(formatAddress(address)).toEqual(correctAddress);
  });
});
