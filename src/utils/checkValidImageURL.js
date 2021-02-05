const checkValidImageURL = (url) => {
  const invalidImageURL = "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg";
  const placeHolderURL =
    "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg";

  if (url === invalidImageURL) {
    return placeHolderURL;
  } else {
    return url;
  }
};

export { checkValidImageURL };
