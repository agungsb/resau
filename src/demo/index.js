import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Router } from "react-router-dom";

import createHistory from "history/createBrowserHistory";
import StoreProvider from "./components/Context/Store";

const history = createHistory();
ReactDOM.render(
  <StoreProvider>
    <Router history={history}>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
