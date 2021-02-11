import React from "react";

import { Header } from "../../components";
import { WebPageRoutes } from "../index";
import "./App.css";

function App() {
  return (
    <div className="App container w-full lg:w-4/5 xl:w-3/4 2xl-w-3/4">
      <Header />
      <WebPageRoutes />
    </div>
  );
}

export { App };
