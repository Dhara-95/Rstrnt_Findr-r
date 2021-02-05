import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Homepage } from "../Homepage";
import { SearchResults } from "../SearchResults";

const WebPageRoutes = () => {
  const [userInput, setUserInput] = useState("");

  return (
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
  );
};

export { WebPageRoutes };
