import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const checkValidPriceRating = (price) => {
  if (price === null) {
    return "No price rating available";
  } else {
    return price;
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

const returnCorrectStarRating = (rating) => {
  const iconArray = createIconArray(rating);

  const componentsToRender = iconArray.map((icon, index) => {
    return <FontAwesomeIcon icon={icon} key={index} color="gold" />;
  });
  return componentsToRender;
};

export { checkValidImageURL, checkValidPriceRating, returnCorrectStarRating };
