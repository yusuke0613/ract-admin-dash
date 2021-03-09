import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import configureStore from "./store";
import theme from "./_theme";
import { ThemeProvider } from "@material-ui/styles";

import "./styles.scss";

require("./favicon.ico");
const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
