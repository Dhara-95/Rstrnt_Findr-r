import React from "react";

const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <div className="text-grey">
            {review.text}
            {review.rating}
            {review.user.name}
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
