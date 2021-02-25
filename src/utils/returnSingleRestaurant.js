const returnSingleRestaurant = (businesses, id) => {
  return businesses.find((restaurant) => restaurant.id === id);
};

export { returnSingleRestaurant };
