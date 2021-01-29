import React from "react";

import CuisineImage from "../../components/CuisineImage";

const CuisineList = () => {
  const imageArray = ["image 1", "image 2", "image 3", "image 4"];

  return (
    <div className="image-container text-grey flex justify-around">
      {imageArray.map((image, i) => {
        return <CuisineImage image={image} key={i} />;
      })}
    </div>
  );
};

export default CuisineList;
