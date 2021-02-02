import { RESTAURANT_BY_POSTCODE } from "../../../queries";

const mocks = [
  {
    request: {
      query: RESTAURANT_BY_POSTCODE,
      variables: { postcode: "W13 34H" },
    },
    result: {
      data: {
        dog: {
          name: "Douglas",
        },
      },
    },
  },
];

export { mocks };
