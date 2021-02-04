import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { LabelsObject } from "../../Labels";

const checkValidImageURL = (url) => {
  const { invalidImageURLLabel } = LabelsObject;

  if (url === "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg") {
    return invalidImageURLLabel;
  } else {
    return url;
  }
};

const createIconArray = (rating) => {
  const iconArray = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    iconArray.push(faStar);
  }
  if (rating % 1 !== 0) {
    iconArray.push(faStarHalf);
  }
  return iconArray;
};

const formattedAddress = (address) => {
  return address.replace(/\n/g, ", ");
};

export { checkValidImageURL, createIconArray, formattedAddress };
