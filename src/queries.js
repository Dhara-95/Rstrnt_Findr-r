const RESTAURANT_BY_POSTCODE = `
  query Search($postcode: String) {
    search(term: "restaurants", location: $postcode, limit: 20, sort_by: "distance") {
      business {
        id
        name
        categories {
          title
        }
        rating
        price
        photos
        location {
          address1
          address2
          address3
          city
          state
          postal_code
          country
          formatted_address
        }
        reviews {
          text
          rating
          user {
            name
          }
        }
        coordinates {
          latitude
          longitude
        }
      }
    }
  }
`;

export { RESTAURANT_BY_POSTCODE };
