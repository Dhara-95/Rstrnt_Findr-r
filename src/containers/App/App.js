import React from "react";

import Header from "../../components/Header";
import Homepage from "../Homepage";
import "./App.css";

import { gql } from "@apollo/client";
import { client } from "../../apolloClient";

function App() {
  client
    .query({
      query: gql`
        {
          search(term: "burrito", location: "san francisco", limit: 5) {
            total
            business {
              name
              url
            }
          }
        }
      `,
    })

    .then((result) => console.log(result));
  return (
    <div className="App container lg:w-4/5">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
