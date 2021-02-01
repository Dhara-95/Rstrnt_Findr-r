import React from "react";
import { useQuery, gql } from "@apollo/client";

import { headerLabel } from "../../Labels";

const YELP_QUERY = gql`
  {
    search(term: "burrito", location: "san francisco", limit: 5) {
      total
      business {
        name
        url
      }
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(YELP_QUERY);
  if (data) console.log(data);

  return <h1 className="text-5xl text-grey py-6">{headerLabel}</h1>;
};

export default Header;
