import React from "react";
import LocationSearchForm from "../../components/LocationSearchForm";
import CuisineList from "../CuisineList";

const Homepage = () => {
  return (
    <>
      <LocationSearchForm />
      <CuisineList />
    </>
  );
};

export default Homepage;
