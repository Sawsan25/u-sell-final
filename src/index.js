import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "assets/scss/material-kit-react.scss?v=1.10.0";
import "./assets/usellAssets/styles/index.scss"
import { Provider } from "react-redux";
import store from "./store";

// pages for this product
// import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

// var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
