import React from "react";

import { findByCuisineLabel } from "../../Labels";
import CuisineList from "../CuisineList";

const CuisineListContainer = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl text-grey p-6">{findByCuisineLabel}</h2>
      <CuisineList />
    </div>
  );
};

export default CuisineListContainer;
