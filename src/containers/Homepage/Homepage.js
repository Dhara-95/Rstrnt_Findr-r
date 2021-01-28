import React, { useState } from "react";
import AddressInput from "../../components/AddressInput/AddressInput";

const Homepage = () => {
  const [imageArray, updateImageArray] = useState([
    "image 1",
    "image 2",
    "image 3",
    "image 4",
  ]);

  return (
    <>
      <AddressInput />

      <div className="py-8">
        <h2 className="text-2xl text-grey p-6">Find By Cuisine</h2>
        <div className="image-container text-grey flex justify-around">
          {imageArray.map((image) => {
            return <div className="w-60 h-60 bg-grey rounded-3xl">{image}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
