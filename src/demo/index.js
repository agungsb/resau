import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Router } from "react-router-dom";

import createHistory from "history/createBrowserHistory";

const history = createHistory();
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
