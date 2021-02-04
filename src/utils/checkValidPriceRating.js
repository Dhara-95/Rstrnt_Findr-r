const checkValidPriceRating = (price) => {
  if (price === null) {
    return "No price rating available";
  } else {
    return price;
  }
};

export { checkValidPriceRating };
