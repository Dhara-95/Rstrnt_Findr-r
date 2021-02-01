import { gql } from "@apollo/client";

const RESTAURANT_BY_POSTCODE = gql`
  query Search($postcode: String) {
    search(term: "restaurants", location: $postcode, limit: 20) {
      total
      business {
        name
        url
        review_count
        rating
        price
        photos
        reviews {
          text
          rating
        }
      }
    }
  }
`;

export { RESTAURANT_BY_POSTCODE };
