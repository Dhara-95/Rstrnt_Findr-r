import React from "react";

import { Header } from "../../components";
import { WebPageRoutes } from "../index";
import "./App.css";

function App() {
  return (
    <div className="App container lg:w-4/5">
      <Header />
      <WebPageRoutes />
    </div>
  );
}

export { App };
