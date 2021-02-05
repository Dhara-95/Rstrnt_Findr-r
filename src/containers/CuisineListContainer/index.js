import React from "react";

import { CuisineList } from "../CuisineList";
import { labels } from "../../Labels";

const CuisineListContainer = () => {
  const { findByCuisine } = labels;

  return (
    <div className="py-8">
      <h2 className="text-2xl text-grey p-6">{findByCuisine}</h2>
      <CuisineList />
    </div>
  );
};

export { CuisineListContainer };
