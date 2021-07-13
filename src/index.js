import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { myStore } from "./store"; 
import App from "./pages/App";
import "./assets/styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
