import React from "react";

import { formatAddress } from "../../utils/formatAddress";

const SingleLineAddress = (props) => {
  const { address } = props;
  const formattedAddress = formatAddress(address);

  return <span className="text-grey">{formattedAddress}</span>;
};

export { SingleLineAddress };
