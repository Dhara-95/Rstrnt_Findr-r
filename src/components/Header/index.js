import React from "react";

import { labels } from "../../Labels";

const Header = () => {
  const { header } = labels;

  return <h1 className="text-5xl text-grey py-6">{header}</h1>;
};

export { Header };
