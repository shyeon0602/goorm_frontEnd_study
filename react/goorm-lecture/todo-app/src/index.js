import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import ClassComponent from "./ClassComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // drag and drop 사용을 위해서 strict 모드 제거
  // <React.StrictMode>
  <App />
  // {/* <ClassComponent /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
