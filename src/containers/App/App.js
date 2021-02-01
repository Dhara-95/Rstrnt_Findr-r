import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import SearchResults from "../../components/SearchResults";
import Homepage from "../Homepage";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="App container lg:w-4/5">
      <Header />
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <Homepage setUserInput={setUserInput} />}
        />
        <Route
          path={"/searchresults"}
          exact
          render={() => <SearchResults userInput={userInput} />}
        />
      </Switch>
    </div>
  );
}

export default App;
