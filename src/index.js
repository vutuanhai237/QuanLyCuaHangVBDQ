import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./components/layout/App";
import { unregister } from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App />
    </Provider>
  </React.StrictMode>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
