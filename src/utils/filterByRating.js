const filterByRating = (businesses) => {
  const filteredState = [...businesses];

  return filteredState.sort((a, b) => b.rating - a.rating);
};

export { filterByRating };
