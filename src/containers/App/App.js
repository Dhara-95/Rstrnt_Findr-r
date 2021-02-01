import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import SearchResults from "../../components/SearchResults";
import Homepage from "../Homepage";
import "./App.css";

function App() {
  return (
    <div className="App container lg:w-4/5">
      <Header />
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/searchresults"} exact component={SearchResults} />
      </Switch>
    </div>
  );
}

export default App;
