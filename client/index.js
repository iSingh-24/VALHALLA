import React from "react";

import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { HashRouter } from "react-router-dom";
import { GlobalStateProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </HashRouter>
);
