import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const createIconList = (rating) => {
  const iconList = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    iconList.push(faStar);
  }
  if (rating % 1 !== 0) {
    iconList.push(faStarHalf);
  }
  return iconList;
};

export { createIconList };
