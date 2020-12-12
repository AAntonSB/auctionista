import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import NotificationProvider from "./providers/NotificationProvider";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App></App>
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
/*
async function getListings() {
  let res = await fetch('/rest/v1/listings');
  res = await res.json();
  console.log(res);
}

getListings();
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
