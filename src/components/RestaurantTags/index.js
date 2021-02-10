import React from "react";

const RestaurantTags = (props) => {
  const { tags } = props;

  return (
    <div className="restaurant-tag">
      {tags.map((tag, index) => {
        return (
          <span className="text-grey" key={index}>
            {(index ? ", " : "") + tag.title}
          </span>
        );
      })}
    </div>
  );
};

export { RestaurantTags };
