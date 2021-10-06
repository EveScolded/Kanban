import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import boardStore from "./stores/BoardStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={boardStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
