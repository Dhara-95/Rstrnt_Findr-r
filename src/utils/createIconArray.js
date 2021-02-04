import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

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

export { createIconArray };
