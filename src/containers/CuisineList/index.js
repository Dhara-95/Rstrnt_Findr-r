import React, { useState } from "react";

import CuisineImage from "../../components/CuisineImage";
import { findByCuisineLabel } from "../../Labels";

const CuisineList = () => {
  const [imageArray, updateImageArray] = useState([
    "image 1",
    "image 2",
    "image 3",
    "image 4",
  ]);

  return (
    <div className="py-8">
      <h2 className="text-2xl text-grey p-6">{findByCuisineLabel}</h2>
      <div className="image-container text-grey flex justify-around">
        {imageArray.map((image) => {
          return <CuisineImage image={image} />;
        })}
      </div>
    </div>
  );
};

export default CuisineList;
