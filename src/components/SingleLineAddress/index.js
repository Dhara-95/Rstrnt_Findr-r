import React from "react";

import { formatAddress } from "../../utils";

const SingleLineAddress = (props) => {
  const { address } = props;
  const formattedAddress = formatAddress(address);

  return (
    <span className=" restaurant-address text-grey">{formattedAddress}</span>
  );
};

export { SingleLineAddress };
