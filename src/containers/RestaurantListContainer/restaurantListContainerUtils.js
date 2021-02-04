import { LabelsObject } from "../../Labels";

const checkValidImageURL = (url) => {
  const { invalidImageURLLabel } = LabelsObject;

  if (url === "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg") {
    return invalidImageURLLabel;
  } else {
    return url;
  }
};

const formattedAddress = (address) => {
  return address.replace(/\n/g, ", ");
};

export { checkValidImageURL, formattedAddress };
