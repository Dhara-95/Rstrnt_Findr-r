import React from "react";

import { labels } from "../../Labels";

const LoadingConfirmation = () => {
  const { loading } = labels;

  return <h1 className="text-grey">{loading}</h1>;
};

export { LoadingConfirmation };
