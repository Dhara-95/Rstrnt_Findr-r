import React from "react";

import { LabelsObject } from "../../Labels";

const Header = () => {
  const { headerLabel } = LabelsObject;

  return <h1 className="text-5xl text-grey py-6">{headerLabel}</h1>;
};

export default Header;
