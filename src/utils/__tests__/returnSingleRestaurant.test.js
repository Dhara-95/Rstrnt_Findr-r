import { returnSingleRestaurant } from "../returnSingleRestaurant";

describe("returnSingleRestaurant", () => {
  test("Returns a single restaurant based on business id ", () => {
    const businesses = [
      { id: "OV4Lnl9UwUPi4W9tRwbqzA", name: "Apsley Chinese" },
      { id: "HGkMlvRYIaP0NCqiN4_nFQ", name: "Apsley Fish & Chips" },
      { id: "pNXAw1NcQEFTRylEI5rR_A", name: "Bull Rodizio" },
    ];
    const call = returnSingleRestaurant(businesses, "OV4Lnl9UwUPi4W9tRwbqzA");
    const expectation = {
      id: "OV4Lnl9UwUPi4W9tRwbqzA",
      name: "Apsley Chinese",
    };
    expect(call).toEqual(expectation);
  });
});
