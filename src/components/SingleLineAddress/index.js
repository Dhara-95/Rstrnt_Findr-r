import React from "react";

import { formatAddress } from "../../utils/formatAddress";

const SingleLineAddress = (props) => {
  const { unformattedAddress } = props;

  return <span className="text-grey">{formatAddress(unformattedAddress)}</span>;
};

export { SingleLineAddress };
